# React UI Page (Vite) Sample

This sample demonstrates building a ServiceNow UI Page with React and TypeScript using **Vite** for both the dev server and production build, while using `servicenowFrontEndPlugins` from `@servicenow/isomorphic-rollup` for all ServiceNow-specific behavior.

For general guidance on building UI Pages with React, see:
- [Developing UI with React](https://docs.servicenow.com/csh?topicname=sdk-react-ui&version=latest)
- [Fluent UI Page API](https://docs.servicenow.com/csh?topicname=sdk-uipage-api&version=latest)

## What's Different from the Rollup Sample

| | `react-ui-page-ts-sample` | `react-ui-page-vite-sample` |
|---|---|---|
| **Dev server** | `rollup-plugin-dev` + `rollup-plugin-livereload` | Vite dev server (HMR) |
| **Build orchestration** | Direct `rollup()` / `watch()` calls | `vite build` / `vite createServer` |
| **ServiceNow plugins** | `servicenowFrontEndPlugins` | `servicenowFrontEndPlugins` (same) |
| **TSX transform** | SWC (via isomorphic-rollup) | SWC (via isomorphic-rollup, esbuild disabled) |
| **Source files** | Identical | Identical |

Vite is configured with `esbuild: false` so that the SWC plugin from `@servicenow/isomorphic-rollup` handles all TypeScript/JSX transforms through Rollup's plugin pipeline.

The application source code (`src/`) is unchanged — only `now.dev.mjs`, `now.prebuild.mjs`, and `package.json` differ.

## CSS Modules

CSS Modules (`*.module.css`) are supported on the Vite build path. Both `now-sdk run dev` and `now-sdk build` will resolve CSS Module imports to hashed class names.

See `src/client/components/StatusBadge.module.css` and `StatusBadge.tsx` for a working example:

```tsx
import styles from './StatusBadge.module.css'

// styles.badge, styles.new, etc. are hashed class names
<span className={`${styles.badge} ${styles.new}`}>New</span>
```

A TypeScript declaration for `*.module.css` is included in `src/client/global.d.ts` so that class-name lookups like `styles.badge` type-check without project-local augmentation.

> **Note:** CSS Modules are not supported on the older Rollup development path (`react-ui-page-ts-sample`).
