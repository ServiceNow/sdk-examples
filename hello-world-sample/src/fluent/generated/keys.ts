import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    x_helloworld_tableone_record1: {
                        table: 'x_helloworld_tableone'
                        id: '7113578ec3904201bee7d3b33cb06745'
                    }
                }
            }
        }
    }
}
