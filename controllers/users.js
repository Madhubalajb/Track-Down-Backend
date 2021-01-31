const userRouter = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')

userRouter.get('/', async(request, response) => {
    const users = await User.find({}).populate('expenses', {habit_name: 1, habit_month: 1, habit_track: 1})
    response.json(users.map(user => user.toJSON()))
})

userRouter.post('/', async(request, response, next) => {
    try {
        const body = request.body
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)
    
        const newUser = new User({
            username: body.username,
            name: body.name,
            passwordHash
        })
        const savedUser = await newUser.save()
        response.status(201).json(savedUser)
    }
    catch(exception) {
        next(exception)
    }
})

module.exports = userRouter