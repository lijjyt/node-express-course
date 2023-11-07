

class customAPIError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}
 

const createCustomErorr = (msg, statusCode) =>{
    return new customAPIError(msg, statusCode)
}

module.exports = {
    createCustomErorr,
    customAPIError,
}