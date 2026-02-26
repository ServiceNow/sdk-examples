import { action, Flow, wfa, trigger } from '@servicenow/sdk/automation'

export const knowledgeArticleQaFlow = Flow(
    {
        $id: Now.ID['knowledge_article_qa_flow'],
        name: 'Knowledge Article QA Flow',
        description: 'Validates published knowledge articles and notifies authors or managers based on quality',
    },
    wfa.trigger(
        trigger.application.knowledgeManagement,
        { $id: Now.ID['knowledge_management_trigger'] },
        {}
    ),
    (params) => {
        const article = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_kb_article'] },
            {
                table: 'kb_knowledge',
                conditions: `sys_id=${wfa.dataPill(params.trigger.knowledge, 'reference')}`,
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        const author = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_author'] },
            {
                table: 'sys_user',
                conditions: `sys_id=${wfa.dataPill(article.Record.author, 'reference')}`,
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        // QA check 1: article must have content
        wfa.flowLogic.if(
            {
                $id: Now.ID['check_content_empty'],
                condition: `${wfa.dataPill(article.Record.text, 'string')}ISEMPTY`,
                annotation: 'Article body is empty',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    { $id: Now.ID['revert_to_draft_no_content'] },
                    {
                        table_name: 'kb_knowledge',
                        record: wfa.dataPill(article.Record.sys_id, 'reference'),
                        values: TemplateValue({
                            workflow_state: 'draft',
                            comments: 'QA failed: article body is empty. Please add content before re-publishing.',
                        }),
                    }
                )

                const revisionTask = wfa.action(
                    action.core.createRecord,
                    { $id: Now.ID['create_content_task'] },
                    {
                        table_name: 'task',
                        values: TemplateValue({
                            short_description: `Add content to KB article: ${wfa.dataPill(article.Record.short_description, 'string')}`,
                            assigned_to: wfa.dataPill(author.Record.sys_id, 'reference'),
                            priority: 3,
                            state: 1,
                        }),
                    }
                )

                wfa.action(
                    action.core.sendNotification,
                    { $id: Now.ID['notify_author_no_content'] },
                    {
                        record: wfa.dataPill(revisionTask.record, 'reference'),
                        notification: 'kb_article_revision_needed',
                    }
                )

                wfa.flowLogic.endFlow({
                    $id: Now.ID['end_flow_no_content'],
                    annotation: 'End — article failed QA (no content)',
                })
            }
        )

        // QA check 2: article must have a title
        wfa.flowLogic.if(
            {
                $id: Now.ID['check_title_empty'],
                condition: `${wfa.dataPill(article.Record.short_description, 'string')}ISEMPTY`,
                annotation: 'Article title is missing',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    { $id: Now.ID['revert_to_draft_no_title'] },
                    {
                        table_name: 'kb_knowledge',
                        record: wfa.dataPill(article.Record.sys_id, 'reference'),
                        values: TemplateValue({
                            workflow_state: 'draft',
                            comments: 'QA failed: article title is missing.',
                        }),
                    }
                )

                wfa.flowLogic.endFlow({
                    $id: Now.ID['end_flow_no_title'],
                    annotation: 'End — article failed QA (no title)',
                })
            }
        )

        // Article passed QA — stamp approval comment
        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['mark_qa_approved'] },
            {
                table_name: 'kb_knowledge',
                record: wfa.dataPill(article.Record.sys_id, 'reference'),
                values: TemplateValue({
                    comments: `QA approved on ${wfa.dataPill(params.trigger.run_start_date_time, 'glide_date_time')}.`,
                }),
            }
        )

        const attachments = wfa.action(
            action.core.getAttachmentsOnRecord,
            { $id: Now.ID['get_article_attachments'] },
            { source_record: wfa.dataPill(article.Record.sys_id, 'reference') }
        )

        // Notify knowledge manager if article has attachments (high quality)
        wfa.flowLogic.if(
            {
                $id: Now.ID['check_has_attachments'],
                condition: `${wfa.dataPill(attachments.parameter, 'array.string')}ISNOTEMPTY`,
                annotation: 'Article has supporting attachments — high quality',
            },
            () => {
                const kbManager = wfa.action(
                    action.core.lookUpRecord,
                    { $id: Now.ID['lookup_kb_manager'] },
                    {
                        table: 'sys_user',
                        conditions: 'roles=knowledge_manager^active=true',
                        sort_type: 'sort_asc',
                        if_multiple_records_are_found_action: 'use_first_record',
                    }
                )

                wfa.action(
                    action.core.createRecord,
                    { $id: Now.ID['create_feature_task'] },
                    {
                        table_name: 'task',
                        values: TemplateValue({
                            short_description: `Review for featured status: ${wfa.dataPill(article.Record.short_description, 'string')}`,
                            assigned_to: wfa.dataPill(kbManager.Record.sys_id, 'reference'),
                            priority: 4,
                            state: 1,
                        }),
                    }
                )
            }
        )

        wfa.action(
            action.core.sendNotification,
            { $id: Now.ID['notify_author_approved'] },
            {
                record: wfa.dataPill(article.Record.sys_id, 'reference'),
                notification: 'kb_article_qa_approved',
            }
        )
    }
)
