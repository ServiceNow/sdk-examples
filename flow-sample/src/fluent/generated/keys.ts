import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    assign_desk: {
                        table: 'sys_hub_action_instance_v2'
                        id: '5752ca5d0440466eb6d31772f06c1c87'
                    }
                    assign_laptop: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'fb9fb9bc10804c4aa558b8c631421b90'
                    }
                    assign_outputs: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '3f2e1da8cb0b4aee858ed24495e4013a'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '0693672b26ab4b76934e5a73c0ec56d3'
                    }
                    change_request_approval_notification_flow: {
                        table: 'sys_hub_flow'
                        id: '2a75d8db4baa4847914b31f4e88ed11d'
                    }
                    change_request_approved_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '0bd6d0ed600041c7a1e5c66dab1f5744'
                    }
                    change_risk_tagging_flow: {
                        table: 'sys_hub_flow'
                        id: 'b0c812b3ae6d45e0a7f2d89824e1a264'
                    }
                    change_risk_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '80cf5f91d56d4ec3848d48ff64cb6008'
                    }
                    check_content_empty: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '7ff1a5c748c0400e8f5f45c6caf2db9e'
                    }
                    check_desk_available: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'eca52ec83a8c421890a4bdaec47d7a29'
                    }
                    check_has_attachments: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'b5b095476a9f4207a26e8c0dea03b688'
                    }
                    check_internal_p1: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '166c1d6a707a429789b9af1dba88ccf0'
                    }
                    check_laptop_available: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '6e434bd76a26422ab85f07e2cfc8ebfc'
                    }
                    check_not_assigned_75: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '9da22e90bfba45008ab71148f56f12bd'
                    }
                    check_resolved_90: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '1bfbf8ae014841c18b1324755fc53a49'
                    }
                    check_severity_high: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '9af09e63be774e5e9036b64c9cb68148'
                    }
                    check_severity_medium: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '06d5cc12b51e499daf45c4b0eca3728f'
                    }
                    check_title_empty: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '831d24d80c534734b1ec712f7af369b5'
                    }
                    check_user_table: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'd236ad7591ee4434a1a74adec19706f2'
                    }
                    confirm_p3_email: {
                        table: 'sys_hub_action_instance_v2'
                        id: '7b0ad2be9d304c66abb63280b69a63a9'
                    }
                    confirm_resolution: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'cf5fdd8159e64963932200b3e3654b42'
                    }
                    copy_attachment: {
                        table: 'sys_hub_action_instance_v2'
                        id: '085d33f849234d84a32f1ef81fc3e87a'
                    }
                    copy_attachments_loop: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'bff6e8a39de44e3c9ff6e1b7da961933'
                    }
                    create_catalog_task_flow: {
                        table: 'sys_hub_flow'
                        id: '6b21084d2add4ea39a6b5af72b4cafd2'
                    }
                    create_catalog_task_step1: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd02e4fcc43384147890cedc57ee8d13c'
                    }
                    create_catalog_task_step2: {
                        table: 'sys_hub_action_instance_v2'
                        id: '4f5d100b9bad4d069d21de106a78a270'
                    }
                    create_catalog_task_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '42ec89e481d540129372fd33b0f2b058'
                    }
                    create_content_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0f7c09db0d534bd6a733bcaead7e6a27'
                    }
                    create_feature_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '14ed474033604a01b450d1cb419f4270'
                    }
                    create_p3_incident: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e603a6039a9c41cabbb8ca6f1cc73ce4'
                    }
                    create_p3_incident_branch: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '7edce05c9e9b40f7b2a9cc78f55a1cb2'
                    }
                    email_incident_task_flow: {
                        table: 'sys_hub_flow'
                        id: 'bc92a7dfa52c4153b42b7e46ee7e3686'
                    }
                    empty_origin_incident_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'b562ad3c76c44a57be1adf6a8111f3a4'
                    }
                    end_flow_no_content: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '560513c7c5ed4dbf835653d9bd76f420'
                    }
                    end_flow_no_title: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'f52fecd2a2a24695996b4ad585e60904'
                    }
                    foreach_additional_assignees_high: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'fd642cc4cd854c38b9caa36944b56c97'
                    }
                    foreach_additional_assignees_medium: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'c7b25090282949009cd1d9ce2fcf4525'
                    }
                    foreach_users: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'a74ba80312a94c728c55889a624d3f9d'
                    }
                    get_article_attachments: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'a5fec7953d7c42edb69a961f9753a50b'
                    }
                    get_email_attachments: {
                        table: 'sys_hub_action_instance_v2'
                        id: '19c23d4518d94fba9f5d15630d83c396'
                    }
                    handle_assigned_75: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '312aca290beb4725861afeaf3d231662'
                    }
                    handle_unresolved_90: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'ed38a7fab61b407096e8b5f614e655fd'
                    }
                    inbound_email_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '8fe77c6fcf46438189b621a7a2f25b83'
                    }
                    incident_severity_alert_flow: {
                        table: 'sys_hub_flow'
                        id: '24c825516f744110aa3e586f5b9f86de'
                    }
                    init_approval_vars: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '799eb992d2cf4701aaef0b4102db50c1'
                    }
                    knowledge_article_qa_flow: {
                        table: 'sys_hub_flow'
                        id: '510aaf0043ce46ffa1a19ffe739d0f67'
                    }
                    knowledge_management_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '71dbf459156447f4961e19e757c82df4'
                    }
                    log_email_received: {
                        table: 'sys_hub_action_instance_v2'
                        id: '8e7dc52a478c4b7c8ea18551f7c2797d'
                    }
                    log_incident_short_description: {
                        table: 'sys_hub_action_instance_v2'
                        id: '21ec5cde53ec478fa89690d569550613'
                    }
                    log_no_desk: {
                        table: 'sys_hub_action_instance_v2'
                        id: '3f164a1c407c424284764bbf640d47be'
                    }
                    log_no_laptop: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd4664847efec408c8cc10f0b4ec992fa'
                    }
                    log_remote_query: {
                        table: 'sys_hub_action_instance_v2'
                        id: '6c366f5658ee4746ab217a39b6d575f2'
                    }
                    log_risk_tagged: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'c4e4ff6e248746159747e24a5389bf06'
                    }
                    log_unhandled_table: {
                        table: 'sys_hub_action_instance_v2'
                        id: '65ef3c5bd2bf46eca3f130fce03230e7'
                    }
                    log_user_incident_count: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'bcd4da4c0026419e9e8a28ab5aa157a7'
                    }
                    lookup_active_users: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e18d590e8b8a49b6a40f50c920e68394'
                    }
                    lookup_assignee_details_high: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'a2716b72ea0c45d7bc68e30da9a899d4'
                    }
                    lookup_assignee_details_medium: {
                        table: 'sys_hub_action_instance_v2'
                        id: '3e3b64dc8048443280ea86f6ca086368'
                    }
                    lookup_assignment_group: {
                        table: 'sys_hub_action_instance_v2'
                        id: '7ad88631343e414da5219c6ccfb80a38'
                    }
                    lookup_author: {
                        table: 'sys_hub_action_instance_v2'
                        id: '2c50f362694a4b03a04faa64b28d2121'
                    }
                    lookup_available_desk: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0a283fef83b44c838a6cf2ac4ec69b0c'
                    }
                    lookup_available_laptop: {
                        table: 'sys_hub_action_instance_v2'
                        id: '6aef9e011cfb460daf59f7ee9c050b67'
                    }
                    lookup_cab_group: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'f9f3a4ca54ae471fbbb465b2fc1c66ff'
                    }
                    lookup_kb_article: {
                        table: 'sys_hub_action_instance_v2'
                        id: '5ac2e6226d7f4c1795cd8dc2b9de73e3'
                    }
                    lookup_kb_manager: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'bdd1bfe4a2654200924e8d51faf14a8b'
                    }
                    lookup_manager_details: {
                        table: 'sys_hub_action_instance_v2'
                        id: '406da40d3f2e4323a021f8b04f62944f'
                    }
                    lookup_requester_details: {
                        table: 'sys_hub_action_instance_v2'
                        id: '438f4c669a9e4745ba7e5f8622aec978'
                    }
                    lookup_sender: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0274ce22c27e443bb0d7dee7f7a4f9eb'
                    }
                    lookup_sender_manager: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'f73f32b3566e4380a969bc92636eb659'
                    }
                    lookup_sla_75: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'cbb93b9fd8b545fba289773d5473c1c9'
                    }
                    lookup_sla_90: {
                        table: 'sys_hub_action_instance_v2'
                        id: '3233b3eb59094cc08b7496bd2f087f7b'
                    }
                    lookup_task_75: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e3bcfd5f62ba41b9b5bb6425df106fd9'
                    }
                    lookup_task_90: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'bc2a7971e5564154b1b6d7f87a026956'
                    }
                    lookup_user: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'eb3aeaea46e74c30ad3c56dd29f745fe'
                    }
                    lookup_user_incidents: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'c513db1b34bd4b14ab979265a14a43ff'
                    }
                    mark_qa_approved: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'cad5bea99a0a419fb285f2831cf9906b'
                    }
                    new_user_onboarding_subflow: {
                        table: 'sys_hub_flow'
                        id: 'd83d3d195a9746f98efeb4d3b9838034'
                    }
                    no_desk_available: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '4e815e17d4894cbcb404a250316e02d2'
                    }
                    no_laptop_available: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'b6113c9233a14f4e849e12e566f3638f'
                    }
                    notify_author_approved: {
                        table: 'sys_hub_action_instance_v2'
                        id: '41a5dd4532854adeb9254e14ea98ca13'
                    }
                    notify_author_no_content: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'c8b794287c034a2e85d3779beb5553b5'
                    }
                    notify_cab_high_risk: {
                        table: 'sys_hub_action_instance_v2'
                        id: '298c07fc69084c95b00074fd84b0f205'
                    }
                    notify_manager_75: {
                        table: 'sys_hub_action_instance_v2'
                        id: '4b856cddd7d146b1aad9eb04b4b9a53f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '511ac5549da34398ad43a68651ab17ac'
                    }
                    remote_query_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'b61efc35fe0b4a4db9a9361309748063'
                    }
                    remote_user_query_flow: {
                        table: 'sys_hub_flow'
                        id: '7e1d899129a546d7b629ff572edddbab'
                    }
                    revert_to_draft_no_content: {
                        table: 'sys_hub_action_instance_v2'
                        id: '9fbe99a2b57142519fada9c29f5731b0'
                    }
                    revert_to_draft_no_title: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0fc6ceccd1af44feb3e27e9be1db253f'
                    }
                    send_approval_notification_email: {
                        table: 'sys_hub_action_instance_v2'
                        id: '1b7ab302b5cd4e55bb94b4b92581f5d5'
                    }
                    send_onboarding_complete: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'aec9a36169fd44278ccf9f25a9e64fca'
                    }
                    send_sms_to_assignee_high: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0af28610568a40868187523a3325b7fb'
                    }
                    send_sms_to_assignee_medium: {
                        table: 'sys_hub_action_instance_v2'
                        id: '1a7e87046d56473b87f76037d8ee1ca8'
                    }
                    send_urgent_email_to_manager: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd1abcbb329f84c809ee1740f7849ff98'
                    }
                    send_welcome_notification: {
                        table: 'sys_hub_action_instance_v2'
                        id: '1e1adfb8c33d4336a0926c1830e794aa'
                    }
                    sla_task_escalation_flow: {
                        table: 'sys_hub_flow'
                        id: '66405578bd8c453b88bf1a71328c049d'
                    }
                    sla_task_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'cfd7e9337274486e92cdfe7f125c7fa7'
                    }
                    software_installation_catalog_item: {
                        table: 'sc_cat_item'
                        id: '2b1e50c0ea5c436aacd7df917125ae08'
                    }
                    tag_high_risk: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'fc7304ff51f54042a6768f17ba085706'
                    }
                    task_for_manager: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e4d97183b44641d6a7656786679f15c0'
                    }
                    task_for_sender: {
                        table: 'sys_hub_action_instance_v2'
                        id: '38a664d6598048e189f624fc45b10122'
                    }
                    test_flow_for_service_catalog: {
                        table: 'sys_hub_flow'
                        id: '18413d0ee5354c8d998bd5331fffe88b'
                    }
                    test_flow_for_service_catalog_ask_for_approval: {
                        table: 'sys_hub_action_instance_v2'
                        id: '979645e5057f40738d45b595e1c16adc'
                    }
                    test_flow_for_service_catalog_create_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '2828a483bf7d4ad6924cebdb9964fe3f'
                    }
                    test_flow_for_service_catalog_else_not_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'f99354b26a3440638f2ef9c1c6306296'
                    }
                    test_flow_for_service_catalog_if_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'ff10e2abcbae491fba61df3d28e604c2'
                    }
                    test_flow_for_service_catalog_if_condition: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '3b5d82381d874fae9fe2802cb7226591'
                    }
                    test_flow_for_service_catalog_if_task_closed: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '961414604bc143159954cbdd7f908579'
                    }
                    test_flow_for_service_catalog_step1: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'ecd95f418bbb4d598738b96aaf6889af'
                    }
                    test_flow_for_service_catalog_step2: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'b521d15eb11c4fc5bddb86cbad723ed7'
                    }
                    test_flow_for_service_catalog_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '74efb7a1e9b14207bfa0e543b9d16c5c'
                    }
                    test_flow_for_service_catalog_update_closed_incomplete: {
                        table: 'sys_hub_action_instance_v2'
                        id: '652618057d4743838c88581338ec0153'
                    }
                    test_flow_for_service_catalog_update_record: {
                        table: 'sys_hub_action_instance_v2'
                        id: '465b41cbd2c243fd8b45210799297494'
                    }
                    unhandled_table_branch: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'a6dcf1b83b614bfc89bb7412eb49308b'
                    }
                    update_incident_to_in_progress: {
                        table: 'sys_hub_action_instance_v2'
                        id: '11a3285e76fe484c9e17d14563728e7b'
                    }
                    update_work_notes_high: {
                        table: 'sys_hub_action_instance_v2'
                        id: '5087ef11a79f4ebfa3456f1cd873aedc'
                    }
                    update_work_notes_notification_sent: {
                        table: 'sys_hub_action_instance_v2'
                        id: '7738ffbe369f4f898fa30d2dd222ff99'
                    }
                    urgent_escalation_90: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd269b0aada5541f38cbf42adf8b38146'
                    }
                    user_info_varset: {
                        table: 'item_option_new_set'
                        id: 'f1a8725a3d8e4c75acc6ca8c89faef41'
                    }
                    wait_75_percent: {
                        table: 'sys_hub_action_instance_v2'
                        id: '2760580300f34760a193da64173b0058'
                    }
                    wait_90_percent: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e7060e8fd8b9448eb0b347fb0fa89319'
                    }
                    wait_for_resolution: {
                        table: 'sys_hub_action_instance_v2'
                        id: '5b27525c9cdc4a28b40295b21ccc1493'
                    }
                    worknote_assigned_75: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e0569f46dbff4e0cba24c0ccf758f999'
                    }
                    worknote_resolved_90: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0d9c98a5974f4b75b8dfb2e0156e1793'
                    }
                    worknote_unassigned_75: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'eb84dbece4fa4161a337f4e393dd202f'
                    }
                }
                composite: [
                    {
                        table: 'sys_hub_flow_variable'
                        id: '1167b6f266c248d49091fe2269bd822c'
                        key: {
                            model: '18413d0ee5354c8d998bd5331fffe88b'
                            element: 'approverUser1'
                        }
                    },
                    {
                        table: 'sys_hub_flow_variable'
                        id: '1cacbdc7304d4096916c5a7d56427834'
                        key: {
                            model: 'd83d3d195a9746f98efeb4d3b9838034'
                            element: 'desk_found'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1d628573558b49be93389bd6e55979bd'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f1a8725a3d8e4c75acc6ca8c89faef41'
                            name: 'userEmail'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1e1d5ed2d5254fadab6015586f2207c3'
                        key: {
                            name: 'var__m_sys_hub_flow_input_d83d3d195a9746f98efeb4d3b9838034'
                            element: 'user_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '26f6df872f034bec83c7e59247a9d69f'
                        key: {
                            model: 'd83d3d195a9746f98efeb4d3b9838034'
                            element: 'laptop_assigned'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c0bb521e90648a5a5b4d7816b1c7048'
                        key: {
                            name: 'var__m_sys_hub_flow_variable_18413d0ee5354c8d998bd5331fffe88b'
                            element: 'approverUser1'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_variable'
                        id: '2cc46dc754f241bbb0d2f5217c472d3b'
                        key: {
                            model: 'd83d3d195a9746f98efeb4d3b9838034'
                            element: 'laptop_found'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '37b34a1db6494d3bbf67858559d28612'
                        key: {
                            cat_item: '2b1e50c0ea5c436aacd7df917125ae08'
                            variable_set: 'NULL'
                            name: 'ipAddress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a7a2fbda2514933b6c1ee205bd455c3'
                        key: {
                            name: 'var__m_sys_hub_flow_output_d83d3d195a9746f98efeb4d3b9838034'
                            element: 'laptop_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '3c4177ce4e5044199545e69814525da7'
                        key: {
                            model: 'd83d3d195a9746f98efeb4d3b9838034'
                            element: 'desk_number'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '410bbb3334534c67b213f2537a26b22a'
                        key: {
                            cat_item: '2b1e50c0ea5c436aacd7df917125ae08'
                            variable_set: 'NULL'
                            name: 'label'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4188f9c6b4664b3a9ec934438e8c95dd'
                        key: {
                            cat_item: '2b1e50c0ea5c436aacd7df917125ae08'
                            variable_set: 'NULL'
                            name: 'multilineText'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '43379663ae744b63a354c5053485ae3c'
                        key: {
                            model: 'd83d3d195a9746f98efeb4d3b9838034'
                            element: 'laptop_number'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '442402686d6a4d0b859efcbdf5c508c7'
                        key: {
                            cat_item: '2b1e50c0ea5c436aacd7df917125ae08'
                            variable_set: 'NULL'
                            name: 'richTextLabel'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '500683c301034c489696c70a207b9839'
                        key: {
                            model: 'd83d3d195a9746f98efeb4d3b9838034'
                            element: 'user_sys_id'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '576ed78720fe4b5f87263dd8c642f6d7'
                        key: {
                            model: 'd83d3d195a9746f98efeb4d3b9838034'
                            element: 'desk_assigned'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '63e4030555c24254843680d402b5b820'
                        key: {
                            model: 'd83d3d195a9746f98efeb4d3b9838034'
                            element: 'office_location'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63f03eb18dae4a3fa891c5a0d900005d'
                        key: {
                            name: 'var__m_sys_hub_flow_variable_d83d3d195a9746f98efeb4d3b9838034'
                            element: 'desk_found'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7cd6af9c195045529272b6f2426384f6'
                        key: {
                            name: 'var__m_sys_hub_flow_variable_d83d3d195a9746f98efeb4d3b9838034'
                            element: 'laptop_found'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7db19a4ac9434eb09710263225db4098'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f1a8725a3d8e4c75acc6ca8c89faef41'
                            name: 'userPhone'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7f3237000555401b9c2c75b09a20cfc7'
                        key: {
                            cat_item: '2b1e50c0ea5c436aacd7df917125ae08'
                            variable_set: 'NULL'
                            name: 'singleline'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8675148e04634cdfb5afe4b270fc3806'
                        key: {
                            cat_item: '2b1e50c0ea5c436aacd7df917125ae08'
                            variable_set: 'NULL'
                            name: 'email'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '9e169ad5ccf741db8e4e30c33c8b85c9'
                        key: {
                            sc_cat_item: '2b1e50c0ea5c436aacd7df917125ae08'
                            variable_set: 'f1a8725a3d8e4c75acc6ca8c89faef41'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7217d59b40d4fbf949789e5e18776ed'
                        key: {
                            name: 'var__m_sys_hub_flow_output_d83d3d195a9746f98efeb4d3b9838034'
                            element: 'desk_assigned'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa708874765e498c8218df2da8197768'
                        key: {
                            name: 'var__m_sys_hub_flow_input_d83d3d195a9746f98efeb4d3b9838034'
                            element: 'office_location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b8ab3afca1984a6caf81a2bd17147d95'
                        key: {
                            cat_item: '2b1e50c0ea5c436aacd7df917125ae08'
                            variable_set: 'NULL'
                            name: 'html'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e30acb9ea5204d218a78307a8407b31a'
                        key: {
                            name: 'var__m_sys_hub_flow_output_d83d3d195a9746f98efeb4d3b9838034'
                            element: 'laptop_assigned'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e383418eaaef420bb9a40c8197ab0aa6'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f1a8725a3d8e4c75acc6ca8c89faef41'
                            name: 'userName'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e603531f0e0048cd91ba381114882e2a'
                        key: {
                            cat_item: '2b1e50c0ea5c436aacd7df917125ae08'
                            variable_set: 'NULL'
                            name: 'url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f78d6cf336cc4129af44cffb53202464'
                        key: {
                            name: 'var__m_sys_hub_flow_output_d83d3d195a9746f98efeb4d3b9838034'
                            element: 'desk_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'fbe57b69ea384835bb7112e68aed5947'
                        key: {
                            cat_item: '2b1e50c0ea5c436aacd7df917125ae08'
                            variable_set: 'NULL'
                            name: 'yesNo'
                        }
                    },
                ]
            }
        }
    }
}
