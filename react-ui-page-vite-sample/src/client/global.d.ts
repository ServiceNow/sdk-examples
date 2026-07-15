// handles importing css as modules
declare module '*.css' {
    const content: string
    export default content
}

declare module '*.svg' {
    const url: string
    export default url
}

declare module '*.png' {
    const url: string
    export default url
}

declare module '*.jpg' {
    const url: string
    export default url
}

declare module '*.gif' {
    const url: string
    export default url
}
