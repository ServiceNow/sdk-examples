import { servicenowFrontEndPlugins, watch } from '@servicenow/isomorphic-rollup'
import vue from 'rollup-plugin-vue'

export default async ({ rootDir, config, fs, path, logger, credential }) => {
    const clientDir = path.join(rootDir, config.clientDir)
    const staticContentDir = path.join(rootDir, config.staticContentDir)
    fs.rmSync(staticContentDir, { recursive: true, force: true })
    const watcher = watch({
        fs,
        input: path.join(clientDir, '**', '*.html'),
        plugins: [
            vue(),
            servicenowFrontEndPlugins({
                dev: true,
                scope: config.scope,
                rootDir: clientDir,
                watchPaths: [staticContentDir],
                credential,
            }),
        ],
        output: {
            dir: staticContentDir,
            sourcemap: true,
        },
    })

    return new Promise((resolve, reject) => {
        watcher.on('event', (event) => {
            if (event.error) {
                reject(event.error)
            } else if (event.result) {
                logger.info(`Finished watch build in ${event.duration}ms`)
                event.result.close()
            }
        })
    })
}
