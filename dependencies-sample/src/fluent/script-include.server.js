class SampleScriptIncludeClass {
    constructor() {}

    test() {
        gs.info('test complete')
    }

    refTest() {
        const isNil = global.JSUtil.nil(undefined)
        gs.debug('isNil: ' + isNil)
    }
}

const SampleScriptInclude = SampleScriptIncludeClass
