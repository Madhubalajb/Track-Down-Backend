const config = require('./utils/config')
const habitsRouter = require('./controllers/habits')
const loginRouter = require('./controllers/login')
const userRouter = require('./controllers/users')
const middleware = require('./utils/middleware')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

console.log(`Connection to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(error => {
        console.log(`Error in connection to MongoDB: ${error.message}`)
    })

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(middleware.tokenExtractor)

app.use('/api/habits', habitsRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', userRouter)

module.exports = app