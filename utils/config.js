const env = String(process.env.NODE_ENV)
if(env !== 'production') {
    require('dotenv').config()
}

let PORT = process.env.PORT
let SECRET = process.env.SECRET
let MONGODB_URI = process.env.MONGODB_URI

module.exports = {
    PORT,
    SECRET,
    MONGODB_URI
}