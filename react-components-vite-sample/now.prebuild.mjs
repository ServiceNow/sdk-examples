import { build } from 'vite'
import { servicenowVitePlugins } from '@servicenow/isomorphic-rollup/vite'
import { glob } from '@servicenow/isomorphic-rollup'

export default async ({ rootDir, config, fs, path, logger, registerExplicitId }) => {
    const clientDir = path.join(rootDir, config.clientDir)
    const htmlFilePattern = path.join('**', '*.html')
    const htmlFiles = await glob(htmlFilePattern, { cwd: clientDir, fs })
    if (!htmlFiles.length) {
        logger.warn(`No HTML files found in ${clientDir}, skipping UI build.`)
        return
    }

    const staticContentDir = path.join(rootDir, config.staticContentDir)
    fs.rmSync(staticContentDir, { recursive: true, force: true })

    const plugins = await servicenowVitePlugins({
        scope: config.scope,
        rootDir: clientDir,
        registerExplicitId,
    })

    await build({
        root: clientDir,
        configFile: path.join(rootDir, 'vite.config.mjs'),
        plugins,
        build: {
            outDir: staticContentDir,
            emptyOutDir: true,
            sourcemap: true,
            rollupOptions: {
                input: path.join(clientDir, '**', '*.html'),
            },
        },
    })
}
