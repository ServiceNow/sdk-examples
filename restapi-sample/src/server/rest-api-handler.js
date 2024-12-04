export function process(request, response) {
    response.setStatus(200)
    response.setBody({
        method: "GET",
        data: {"msg" : "success"},
    })
}
