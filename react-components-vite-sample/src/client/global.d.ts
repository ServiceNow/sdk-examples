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

// SVG imports resolve to a URL string (Vite default behavior)
declare module '*.svg' {
    const url: string
    export default url
}
