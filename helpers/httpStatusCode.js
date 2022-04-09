let status={
    range:{
        "100-199": "Informational Responses",
        "200-299": "Successfull Responses",
        "300-399": "Redirection Messages",
        "400-499": "Client Error Responses",
        "500-599": "Server Error Responses"
    },
    statusOfInterest: {
        "200": {
            status: "OK",
            meaning: "The request succeeded. The result meaning of 'success' depends on the HTTP method: GET HEAD PUT POST TRACE"
        },
        "201": {
            status: "Created",
            meaning: "The request succeeded, and a new resource created as a result. Typically used for response sent after POST or some PUT requests."
        },
        "204":{
            status: "No Content",
            meaning: "There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones."
        },
        "304": {
            status: "Not modified",
            meaning: "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response."
        },
        "400": {
            status: "Bad Request",
            meaning: "The server could not understand the request due to invalid syntax."
        },
        "401": {
            status: "Unauthorised",
            meaning: "That is, the client must authenticate itself to get the requested response."
        },
        "403": {
            status: "Forbidden",
            meaning: "Though clients identity known but he client does not have access rights to the content."
        },
        "404": {
            status: "Not found",
            meaning: "The server can not find requested resource. Server may also respond with 403 Forbidden to hide the existence of a resource from an unauthorised client."
        },
        "409": {
            status: "Conflict",
            meaning: "This response is sent when a request conflicts with the current state of the server."
        },
        "410": {
            status: "Gone",
            meaning: "This response is sent when the requested content has been permanently deleted from server, with no forwarding address."
        },
        "500": {
            status: "Internal Server Error",
            meaning: "The server has encountered a situation it does not know how to handle."
        },
        "": {
            status: "",
            meaning: ""
        }
    }
}