// Caught values are typed as unknown, so narrow before reading a message off them
export function errorMessage(error: unknown): string {
    if (error instanceof Error && error.message) {
        return error.message
    }
    return 'Unknown error'
}
