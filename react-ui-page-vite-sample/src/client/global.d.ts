// CSS Modules: *.module.css imports return a class-name mapping (Vite path only)
declare module '*.module.css' {
    const classes: Record<string, string>
    export default classes
}

// Plain CSS imports are treated as strings
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
