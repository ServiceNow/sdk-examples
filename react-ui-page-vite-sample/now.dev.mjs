import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import { servicenowVitePlugins, createViteProxy } from '@servicenow/isomorphic-rollup/vite'

export default async ({ rootDir, config, fs, path, logger, credential }) => {
    const clientDir = path.join(rootDir, config.clientDir)
    const staticContentDir = path.join(rootDir, config.staticContentDir)
    fs.rmSync(staticContentDir, { recursive: true, force: true })

    const plugins = await servicenowVitePlugins({
        scope: config.scope,
        rootDir: clientDir,
        credential,
    })

    const proxy = await createViteProxy(credential)

    const server = await createServer({
        root: clientDir,
        configFile: false,
        plugins: [react(), ...plugins],
        server: {
            port: 3000,
            proxy,
        },
    })

    await server.listen()
    logger.info(`Vite dev server running at http://localhost:${server.config.server.port}`)

    return new Promise(() => {})
}
