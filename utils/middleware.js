const tokenExtractor = (request, response, next) => {
    const authorization = request.get('Authorization')
    if(authorization && authorization.toLowercase().startsWith('bearer ')) {
        request.token = authorization.subString(7)
    }
    next()
}

module.exports = {tokenExtractor}