import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    basic_catalog_item: {
                        table: 'sc_cat_item'
                        id: 'dc496909bd384f94ae30d4d7737b9885'
                    }
                    basic_incident_producer: {
                        table: 'sc_cat_item_producer'
                        id: '3dc496652dcb415ebfce2b528f1302b1'
                        deleted: true
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '1cf21ddb4d0a4aeb827fe4ad98d12b58'
                    }
                    contact_info_variable_set: {
                        table: 'item_option_new_set'
                        id: '0794c7515aa2411d9e27afd9d0003059'
                    }
                    contact_phone_format_script: {
                        table: 'catalog_script_client'
                        id: '29375d35e3ba48b693e4d830d76cf21a'
                    }
                    contact_phone_mandatory_policy: {
                        table: 'catalog_ui_policy'
                        id: '1e4586c2988e4d32a8eca0701a0ec98b'
                    }
                    dev_department_criteria: {
                        table: 'user_criteria'
                        id: '484fc80fee5d4fc1837a0fb7f17f1847'
                    }
                    hide_screenshot_low_urgency_policy: {
                        table: 'catalog_ui_policy'
                        id: '6006259f091f44bfafc84cf116f910fb'
                    }
                    incident_details_varset: {
                        table: 'item_option_new_set'
                        id: 'af6890e7eae14485bc09c7c55d625a0d'
                        deleted: true
                    }
                    incident_submit_validation_script: {
                        table: 'catalog_script_client'
                        id: 'fb9921ce857d4556a17bb1518bd9418c'
                    }
                    incident_urgency_change_script: {
                        table: 'catalog_script_client'
                        id: 'dca9429053ff4fa5b13dfca2450098a4'
                    }
                    incident_with_scripts: {
                        table: 'sc_cat_item_producer'
                        id: '6433b656bf9b477ca50daa4c97ba81dc'
                        deleted: true
                    }
                    it_services_category: {
                        table: 'sc_category'
                        id: 'a09968c5b9b740219c8ed928b7631dbc'
                        deleted: true
                    }
                    it_staff_criteria: {
                        table: 'user_criteria'
                        id: 'b3a1440f78264ae690c5fd177d170e1d'
                        deleted: true
                    }
                    laptop_fulfillment_flow: {
                        table: 'sys_hub_flow'
                        id: '713d24667e6843c2ad1d65a95e326022'
                    }
                    laptop_onload_script: {
                        table: 'catalog_script_client'
                        id: 'd5aa0a1bc82a4d18a336c588a8a47185'
                    }
                    laptop_request_catalog_item: {
                        table: 'sc_cat_item'
                        id: 'e4f1f712009248658654cafe92d15880'
                    }
                    laptop_request_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'c77dfe4f3a70438aad3bb87fcbdb1521'
                    }
                    laptop_type_change_script: {
                        table: 'catalog_script_client'
                        id: '7d441a9a6d5049a18c5a3648ba6a3d76'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '66ebcfd255724bfa82663637837ffb95'
                    }
                    priced_catalog_item: {
                        table: 'sc_cat_item'
                        id: '8efe861ec0944213a5de0614c27ca8e8'
                    }
                    report_incident_producer: {
                        table: 'sc_cat_item_producer'
                        id: 'acfc141b3cc64f33bdfc02e91b679f1c'
                    }
                    report_security_incident_producer: {
                        table: 'sc_cat_item_producer'
                        id: '2f03575d13824f4a9a59b3b57b8e2b2c'
                    }
                    show_dock_for_standard_policy: {
                        table: 'catalog_ui_policy'
                        id: 'a1d50e5f3f2b4775895bc80e8ae155a8'
                    }
                    software_category: {
                        table: 'sc_category'
                        id: '7c3d88fb61604b6f87154cbcba2aaaeb'
                    }
                    software_topic: {
                        table: 'topic'
                        id: '9abdaf01333347fe93932e25b0c719b1'
                    }
                    technical_catalog: {
                        table: 'sc_catalog'
                        id: 'b48e7faa9cf64437bc08f12ce7d4528f'
                    }
                    topic_catalog_item: {
                        table: 'sc_cat_item'
                        id: 'fba88d9ea05443dd9943bec3d855e7b1'
                    }
                    user_info_varset: {
                        table: 'item_option_new_set'
                        id: '427f2d53aece41d193425f04a3af081f'
                    }
                }
                composite: [
                    {
                        table: 'item_option_new'
                        id: '045e47b745bb4896b9f1dce5be47f030'
                        key: {
                            cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            variable_set: 'NULL'
                            name: 'company'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '05212c09eec74995aea1e9a32a7c5f7d'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '427f2d53aece41d193425f04a3af081f'
                            name: 'userPhone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '069d9f852cc6443eb69c8bb032e1379b'
                        key: {
                            name: 'x_servicecatalog_security_incident'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d0208f3adf6448d90b9c1f3977b2d0b'
                        key: {
                            name: 'x_servicecatalog_security_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0f512e1fdb8f4e1892e32f7256d9df8d'
                        key: {
                            cat_item: 'acfc141b3cc64f33bdfc02e91b679f1c'
                            variable_set: 'NULL'
                            name: 'detail'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '11150cec9c8c483690a3fbafbb2d0feb'
                        key: {
                            name: 'x_servicecatalog_security_incident'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '129af557fdb84d8daaea690e35374555'
                        key: {
                            name: 'x_servicecatalog_security_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1456ad7f02d245e48ad377ec0a651afb'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'terms_accepted'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '1b58d808cdc8493ab2cc9ade9a040676'
                        deleted: true
                        key: {
                            sc_cat_item: '6433b656bf9b477ca50daa4c97ba81dc'
                            sc_category: 'a09968c5b9b740219c8ed928b7631dbc'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1b6d210ded1e43b58b03d5a9bea35630'
                        key: {
                            cat_item: 'acfc141b3cc64f33bdfc02e91b679f1c'
                            variable_set: 'NULL'
                            name: 'affected_date'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '27c07389b56d453b99e4cdb6b1da136e'
                        key: {
                            sc_cat_item: 'dc496909bd384f94ae30d4d7737b9885'
                            sc_category: 'd258b953c611227a0146101fb1be7c31'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2c2899c26b7a425a8d2f9e2b7d474342'
                        deleted: true
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'af6890e7eae14485bc09c7c55d625a0d'
                            name: 'shortDescription'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '2d2da575b26c41eaba25b027a53af132'
                        key: {
                            question: {
                                id: '7068360c374f4982b82a92068de872be'
                                key: {
                                    cat_item: 'e4f1f712009248658654cafe92d15880'
                                    variable_set: 'NULL'
                                    name: 'laptop_type'
                                }
                            }
                            value: 'standard'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2d93d5afd463463d9b5473866f73c579'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'laptop_details_start'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '2e6e8a7054c740e7a6577b346e4df9d7'
                        key: {
                            sc_cat_item: '8efe861ec0944213a5de0614c27ca8e8'
                            sc_category: 'd258b953c611227a0146101fb1be7c31'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '2fe29896e2364747b0835b36adcec431'
                        key: {
                            question: {
                                id: '615379a7c33643129da9311a93ee4f1d'
                                key: {
                                    cat_item: 'acfc141b3cc64f33bdfc02e91b679f1c'
                                    variable_set: 'NULL'
                                    name: 'urgency'
                                }
                            }
                            value: '3'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3034b0ec37234e26899ad8eac3e2b099'
                        key: {
                            question: {
                                id: '615379a7c33643129da9311a93ee4f1d'
                                key: {
                                    cat_item: 'acfc141b3cc64f33bdfc02e91b679f1c'
                                    variable_set: 'NULL'
                                    name: 'urgency'
                                }
                            }
                            value: '2'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '31e1b89dbeca4204bb3030fb97290b25'
                        key: {
                            cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            variable_set: 'NULL'
                            name: 'shortDescription'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '32b4b38f42f4414c8dde0d40735e245c'
                        deleted: true
                        key: {
                            sc_cat_item: '3dc496652dcb415ebfce2b528f1302b1'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '32d0eff8e29a47f892c1f09eddfadac1'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'laptop_details_end'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '343070a747a047d680cfd722fb9af3c6'
                        key: {
                            name: 'x_servicecatalog_security_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '36a9860433004868ab10d860f89bdaa3'
                        key: {
                            name: 'x_servicecatalog.requestor'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '40aa3716c4e8406ea4392060178b7722'
                        key: {
                            cat_item: 'acfc141b3cc64f33bdfc02e91b679f1c'
                            variable_set: 'NULL'
                            name: 'short_desc'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '42f9adc09fa34816922ffd14e239f3d7'
                        key: {
                            sc_cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            user_criteria: 'afbaf8be844d40d7a526798fd6ecc5f8'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '46844f706ac643cd80383ac1737f0a2c'
                        key: {
                            sc_cat_item: 'dc496909bd384f94ae30d4d7737b9885'
                            variable_set: '427f2d53aece41d193425f04a3af081f'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '47cbc50d0601454a88f6a2c1a2b31614'
                        deleted: true
                        key: {
                            sc_cat_item: '3dc496652dcb415ebfce2b528f1302b1'
                            variable_set: 'af6890e7eae14485bc09c7c55d625a0d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4efc04b9005747febe5e444918476cb3'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '0794c7515aa2411d9e27afd9d0003059'
                            name: 'contact_name'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '58d858ef643b4f918c45d167815bb770'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'supporting_doc'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5933825818fa4362963ecbadcee99c2e'
                        key: {
                            name: 'x_servicecatalog_security_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '5fb06dd5980c44a49eb73d443af822e3'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'laptop_details_split'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '615379a7c33643129da9311a93ee4f1d'
                        key: {
                            cat_item: 'acfc141b3cc64f33bdfc02e91b679f1c'
                            variable_set: 'NULL'
                            name: 'urgency'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '64fe0c995c284af6bf49fc51f10b2540'
                        key: {
                            name: 'x_servicecatalog.itil'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '66298a4d7f30449da670ca11032f0c86'
                        key: {
                            cat_item: '2f03575d13824f4a9a59b3b57b8e2b2c'
                            variable_set: 'NULL'
                            name: 'short_desc'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '665c0e8ba3994485b46eccc7de4981e2'
                        deleted: true
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'af6890e7eae14485bc09c7c55d625a0d'
                            name: 'description'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '6a44f93fa83f469ebff376455c8b2203'
                        key: {
                            sc_cat_item: '8efe861ec0944213a5de0614c27ca8e8'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '6c334debc2df461ebb4f186a06e7c7b7'
                        key: {
                            question: {
                                id: 'a78b0baaca144746866c982ff8badc58'
                                key: {
                                    cat_item: '8efe861ec0944213a5de0614c27ca8e8'
                                    variable_set: 'NULL'
                                    name: 'laptopType'
                                }
                            }
                            value: 'standard'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '6da2097c220a46eb8eeb70ae0f04cca3'
                        key: {
                            question: {
                                id: 'a91cc245a6bd4017865a75332a4d4fe1'
                                key: {
                                    cat_item: 'e4f1f712009248658654cafe92d15880'
                                    variable_set: 'NULL'
                                    name: 'operating_system'
                                }
                            }
                            value: 'linux'
                        }
                    },
                    {
                        table: 'm2m_connected_content'
                        id: '703414abca7144fe85a0b5a84d1856c4'
                        key: {
                            catalog_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            topic: '782413a7c3053010069aec4b7d40ddf1'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7068360c374f4982b82a92068de872be'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'laptop_type'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '70e75c2553744bdfa7b72da576954bf9'
                        key: {
                            cat_item: 'acfc141b3cc64f33bdfc02e91b679f1c'
                            variable_set: 'NULL'
                            name: 'screenshot'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: '7189492113b348f69dc5976d79473309'
                        key: {
                            ui_policy: '6006259f091f44bfafc84cf116f910fb'
                            catalog_variable: 'IO:70e75c2553744bdfa7b72da576954bf9'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7793eb49a86e45b8a6221d18095dfa63'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'justification'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '79acc31e333a488693c692744d1bb1f2'
                        key: {
                            name: 'x_servicecatalog_security_incident'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7bda0d4d9bd6415fb5a4bec1d78448df'
                        key: {
                            cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            variable_set: 'NULL'
                            name: 'active_user'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '84e074d994084612937c308d5ce10eef'
                        deleted: true
                        key: {
                            sc_cat_item: '3dc496652dcb415ebfce2b528f1302b1'
                            sc_category: 'd258b953c611227a0146101fb1be7c31'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '85023203966f4862bc30b27b7c248986'
                        key: {
                            question: {
                                id: 'a78b0baaca144746866c982ff8badc58'
                                key: {
                                    cat_item: '8efe861ec0944213a5de0614c27ca8e8'
                                    variable_set: 'NULL'
                                    name: 'laptopType'
                                }
                            }
                            value: 'performance'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '86612aafa63c41d287a0de2777db599a'
                        key: {
                            question: {
                                id: '7068360c374f4982b82a92068de872be'
                                key: {
                                    cat_item: 'e4f1f712009248658654cafe92d15880'
                                    variable_set: 'NULL'
                                    name: 'laptop_type'
                                }
                            }
                            value: 'performance'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '8ad2e65b204e463fae1b417f8b9f41f7'
                        key: {
                            sc_cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            sc_catalog: 'b48e7faa9cf64437bc08f12ce7d4528f'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '8cf381e915df436ba56ced93e44102e3'
                        key: {
                            id: '8efe861ec0944213a5de0614c27ca8e8'
                            field: 'recurring_price'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8d8ee9f279fb4b43aad1d03972d60e97'
                        key: {
                            cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            variable_set: 'NULL'
                            name: 'name'
                        }
                    },
                    {
                        table: 'm2m_connected_content'
                        id: '9803fe0988744742a6d413f9a23c772c'
                        key: {
                            catalog_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            topic: '9abdaf01333347fe93932e25b0c719b1'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '9d35044615714b3bbfe5a0ef7af153ff'
                        key: {
                            sc_cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            variable_set: '3820df570a0a0b2700d944110d29fc55'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9d464d2bb41b428a8e0d946f5acb61b2'
                        key: {
                            question: {
                                id: 'a78b0baaca144746866c982ff8badc58'
                                key: {
                                    cat_item: '8efe861ec0944213a5de0614c27ca8e8'
                                    variable_set: 'NULL'
                                    name: 'laptopType'
                                }
                            }
                            value: 'workstation'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9faa1cb274614e59b0d2fd21623f5eb4'
                        key: {
                            question: {
                                id: '615379a7c33643129da9311a93ee4f1d'
                                key: {
                                    cat_item: 'acfc141b3cc64f33bdfc02e91b679f1c'
                                    variable_set: 'NULL'
                                    name: 'urgency'
                                }
                            }
                            value: '1'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'a42002b925484c6ea65f041a3404211b'
                        key: {
                            cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            variable_set: 'NULL'
                            name: 'description'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'a78b0baaca144746866c982ff8badc58'
                        key: {
                            cat_item: '8efe861ec0944213a5de0614c27ca8e8'
                            variable_set: 'NULL'
                            name: 'laptopType'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'a91cc245a6bd4017865a75332a4d4fe1'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'operating_system'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'aec6712dcb47404286127d090fb26d84'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'include_dock'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b069ea88383c49b6997a2434d1a15e81'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'satisfaction'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b17b7334eca04262b4b736a733347ad6'
                        key: {
                            cat_item: '8efe861ec0944213a5de0614c27ca8e8'
                            variable_set: 'NULL'
                            name: 'shortDescription'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b80e455cf6d14017a88ea77179d9fc81'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '427f2d53aece41d193425f04a3af081f'
                            name: 'userName'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b8be35e8e5f74d2c9c279b2a7f43ab61'
                        key: {
                            cat_item: 'acfc141b3cc64f33bdfc02e91b679f1c'
                            variable_set: 'NULL'
                            name: 'assigned_to'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: 'b9d14ce8ef0e406ba2301366b6ff9edd'
                        key: {
                            sc_cat_item: 'dc496909bd384f94ae30d4d7737b9885'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_no_mtom'
                        id: 'bd52d407ca9f4dc7a0857e2a70c89f27'
                        key: {
                            sc_cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            user_criteria: '484fc80fee5d4fc1837a0fb7f17f1847'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'bf22765a2d8143f8b1908ec6e1f07ecf'
                        key: {
                            question: {
                                id: 'a91cc245a6bd4017865a75332a4d4fe1'
                                key: {
                                    cat_item: 'e4f1f712009248658654cafe92d15880'
                                    variable_set: 'NULL'
                                    name: 'operating_system'
                                }
                            }
                            value: 'windows'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: 'cb61f663b1214367ba0e913d2f5c046e'
                        key: {
                            ui_policy: '1e4586c2988e4d32a8eca0701a0ec98b'
                            catalog_variable: 'IO:ff48110d1ad2434da15af1762fb27c9f'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'cbccee03249a44158bbfdd36c633f29e'
                        deleted: true
                        key: {
                            cat_item: '6433b656bf9b477ca50daa4c97ba81dc'
                            variable_set: 'NULL'
                            name: 'shortDescription'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ce0314c8c64a4d1b8bdb24fb598b8ce2'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'accessories'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'cf42c3b6fe3343f1bbe817d0acb6c985'
                        key: {
                            question: {
                                id: 'a91cc245a6bd4017865a75332a4d4fe1'
                                key: {
                                    cat_item: 'e4f1f712009248658654cafe92d15880'
                                    variable_set: 'NULL'
                                    name: 'operating_system'
                                }
                            }
                            value: 'macos'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd0d230fc7c2d443fb91fd4298ea0cf05'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '0794c7515aa2411d9e27afd9d0003059'
                            name: 'contact_email'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd12f8cf6b21e45e1aae0d9fe4fa86c34'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'needed_by'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'd1e9c619220c4142b2ed4b63be427edd'
                        key: {
                            name: 'x_servicecatalog.fulfiller'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: 'd1ef6351f0f148b7b5ee2f8a97c8b251'
                        key: {
                            sc_cat_item: '8efe861ec0944213a5de0614c27ca8e8'
                            variable_set: '427f2d53aece41d193425f04a3af081f'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: 'd5520e0a17c24ab988124e4faabfba38'
                        key: {
                            ui_policy: 'a1d50e5f3f2b4775895bc80e8ae155a8'
                            catalog_variable: 'IO:aec6712dcb47404286127d090fb26d84'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd6e7c1fcc8d249a2b750a0e9e12c278a'
                        key: {
                            question: {
                                id: 'a78b0baaca144746866c982ff8badc58'
                                key: {
                                    cat_item: '8efe861ec0944213a5de0614c27ca8e8'
                                    variable_set: 'NULL'
                                    name: 'laptopType'
                                }
                            }
                            value: 'executive'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'd735d34461fe4c48838536fa48d2f135'
                        key: {
                            sc_cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            sc_category: '7c3d88fb61604b6f87154cbcba2aaaeb'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: 'db7a0741ef2940f4930e477706a1dfb5'
                        key: {
                            sc_cat_item: 'fba88d9ea05443dd9943bec3d855e7b1'
                            variable_set: '427f2d53aece41d193425f04a3af081f'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: 'df92056a5e5a4dbc8e2bcbffeef8980d'
                        deleted: true
                        key: {
                            sc_cat_item: '3dc496652dcb415ebfce2b528f1302b1'
                            user_criteria: 'b3a1440f78264ae690c5fd177d170e1d'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'e1a9899716ad42d48eeeb307dbc91715'
                        key: {
                            id: '8efe861ec0944213a5de0614c27ca8e8'
                            field: 'price'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e2d4bc59ea45406d9427133ac44b8244'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'asset_tag_label'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ed7243acd39549b9bcdbd5e419469554'
                        key: {
                            name: 'x_servicecatalog_security_incident'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ef5970eb265247159d690821a7876022'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '427f2d53aece41d193425f04a3af081f'
                            name: 'userEmail'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: 'f3f0022bca5740d8be9225b76a2ba9c0'
                        deleted: true
                        key: {
                            sc_cat_item: '6433b656bf9b477ca50daa4c97ba81dc'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'f44391d9fc224770b87445f630ff1ba9'
                        key: {
                            question: {
                                id: '7068360c374f4982b82a92068de872be'
                                key: {
                                    cat_item: 'e4f1f712009248658654cafe92d15880'
                                    variable_set: 'NULL'
                                    name: 'laptop_type'
                                }
                            }
                            value: 'ultrabook'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f5bb96e5455649d3a4ed1bfd567db1f7'
                        deleted: true
                        key: {
                            cat_item: '6433b656bf9b477ca50daa4c97ba81dc'
                            variable_set: 'NULL'
                            name: 'description'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f7ced51067c241e78a6c777ebd64f5df'
                        key: {
                            cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: 'NULL'
                            name: 'assigned_user'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: 'fad2e07a2cf94620ab08d85403c0787b'
                        key: {
                            sc_cat_item: 'e4f1f712009248658654cafe92d15880'
                            variable_set: '0794c7515aa2411d9e27afd9d0003059'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ff48110d1ad2434da15af1762fb27c9f'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '0794c7515aa2411d9e27afd9d0003059'
                            name: 'contact_phone'
                        }
                    },
                ]
            }
        }
    }
}
