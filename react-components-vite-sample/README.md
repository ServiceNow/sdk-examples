# React Components Vite Sample

A React UI Page sample that uses [`@servicenow/react-components`](https://www.npmjs.com/package/@servicenow/react-components) for all interactive UI elements. This demonstrates how to build a ServiceNow UI Page with the official React wrappers for Now Design System web components, powered by Vite.

## Components Used

| react-components | Where used |
|---|---|
| `NowRecordListConnected` | Incident list (data-connected) |
| `Button` | Create New Incident action |
| `Heading` | Page title |
| `Alert` | Error notifications (dismissible) |
| `Loader` | Loading spinners |
| `Modal` | Incident create form dialog |
| `Input` | Short description field |
| `Textarea` | Description field |
| `Select` | Status and Priority dropdowns |

## How It Works

### Vite + SWC

The project uses Vite for both development (`now.dev.mjs`) and production builds (`now.prebuild.mjs`). `esbuild` is disabled in `vite.config.mjs` so that the SWC plugin from `@servicenow/isomorphic-rollup` handles all TypeScript and JSX transforms.

`@servicenow/react-components` is excluded from Vite's dependency pre-bundling (`optimizeDeps.exclude`) because its internal `import … assert { external: 'uxasset' }` syntax is incompatible with esbuild.

### Event Model

The react-components wrappers dispatch ServiceNow custom events instead of native DOM events:

```tsx
// Button → onClicked (not onClick)
<Button label="Save" onClicked={() => save()} />

// Input → onInput for real-time tracking
<Input label="Name" value={name} onInput={(e) => setName(e.detail.fieldValue)} />

// Select → onSelectedItemSet
<Select items={items} selectedItem={value} onSelectedItemSet={(e) => setValue(e.detail.value)} />

// Modal → footerActions + onFooterActionClicked
<Modal
    opened
    headerLabel="Edit"
    footerActions={[
        { label: 'Cancel', variant: 'secondary', clickActionType: 'cancel' },
        { label: 'Save',   variant: 'primary',   clickActionType: 'save' },
    ]}
    onFooterActionClicked={(e) => {
        if (e.detail.action.clickActionType === 'save') handleSave()
    }}
/>
```

## Getting Started

```bash
pnpm install
pnpm run dev
```

The development server starts at `http://localhost:3000`.

## Comparison

See [`react-ui-page-vite-sample`](../react-ui-page-vite-sample/README.md) for the same app built with native HTML elements and custom CSS.
