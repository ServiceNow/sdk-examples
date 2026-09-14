import { defineConfig } from 'vite'

// Shared Vite configuration used by both now.dev.mjs and now.prebuild.mjs.
export default defineConfig({
    // Disable Vite's built-in transform so that the SWC plugin from
    // @servicenow/isomorphic-rollup handles all TypeScript and JSX transforms
    // through the Rollup plugin pipeline.
    // Vite 8 replaced esbuild with Oxc as the built-in transformer, so this is
    // `oxc: false`. On Vite 6/7 the equivalent option is `esbuild: false`.
    oxc: false,
    // Skip dependency optimization for our @servicenow/react-components so we can handle
    // mapping external paths when running the dev server.
    optimizeDeps: {
        exclude: ['@servicenow/react-components']
    }
})
