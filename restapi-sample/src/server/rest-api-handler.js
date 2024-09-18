export function process(request, response) {
    response.setStatus(200)
    response.setBody({
        method: request.method,
        data: request.body.data,
    })
}
