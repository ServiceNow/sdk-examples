// handles importing scss as modules
declare module '*.scss' {
    const content: string
    export default content
}
