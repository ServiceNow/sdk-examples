import { servicenowFrontEndPlugins, rollup, glob } from '@servicenow/isomorphic-rollup'

/**
 * Prebuild script for building the client assets of the application before running the rest of the build.
 * Export an async function that accepts useful modules for building the application as arguments.
 * This function returns a Promise that resolves when the build is complete.
 * You can also export an array of functions if you want to run multiple prebuild steps.
 */
export default async ({ rootDir, config, fs, path, logger, registerExplicitId }) => {
    // This is where all the client source files are located
    const clientDir = path.join(rootDir, config.clientDir)
    const htmlFilePattern = path.join('**', '*.html')
    const htmlFiles = await glob(htmlFilePattern, { cwd: clientDir, fs })
    if (!htmlFiles.length) {
        logger.warn(`No HTML files found in ${clientDir}, skipping UI build.`)
        return
    }

    // This is the destination for the build output
    const staticContentDir = path.join(rootDir, config.staticContentDir)
    // Clean up any previous build output
    fs.rmSync(staticContentDir, { recursive: true, force: true })

    // Call the rollup build
    const rollupBundle = await rollup({
        // Use the file system module provided by the build environment
        fs,
        // Search all HTML files in the client directory to find entry points
        input: path.join(clientDir, '**', '*.html'),
        // Use the default set of ServiceNow plugins for Rollup
        // configured for the scope name and root directory
        plugins: servicenowFrontEndPlugins({
            scope: config.scope,
            rootDir: clientDir,
            registerExplicitId,
        }),
    })
    // Write the build output to the configured destination
    // including source maps for JavaScript files
    const rollupOutput = await rollupBundle.write({
        dir: staticContentDir,
        sourcemap: true,
    })
    // Print the build results
    rollupOutput.output.forEach((file) => {
        if (file.type === 'asset') {
            logger.info(`Bundled asset: ${file.fileName} (${file.source.length} bytes)`)
        } else if (file.type === 'chunk') {
            logger.info(`Bundled chunk: ${file.fileName} (${file.code.length} bytes)`)
        }
    })
}
