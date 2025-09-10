// handles importing scss as modules
declare module '*.scss' {
    const content: string
    export default content
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
    export default component
}
