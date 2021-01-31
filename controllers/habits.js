const habitsRouter = require('express').Router()
const Habit = require('../models/habit')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

// Get All
habitsRouter.get('/', async(request, response) => {
    try {
        const habits = await Habit.find({}).populate('user', {username: 1, name: 1})
        response.json(habits.map(habit => habit.toJSON()))
    }
    catch(error) {
        response.status(500).json({message: error.message})
    }
})

// Get one
habitsRouter.get('/:id', getHabit, async(request, response) => {
    try {
        response.json(response.habit)
    }
    catch(error) {
        response.status(500).json({message: error.message})
    }
})

habitsRouter.post('/', async(request, response) => {
    const body = request.body
    const decodedToken  = await jwt.verify(request.token, process.env.SECRET)

    if(!request.token || !decodedToken.id) {
        return response.status(401).json({error: 'Token missing or Invalid'})
    }

    const user = await User.findById(decodedToken.id)

    const newHabit = new Habit({
        habit_name: body.habit_name,
        habit_month: body.habit_month,
        habit_track: body.habit_track,
        user: user._id
    })
    try {
        const savedHabit = await newHabit.save()
        user.habit = user.habits.concat(savedHabit.id)
        await user.save()
        response.status(201).json(savedHabit)
    }
    catch(error) {
        response.status(500).json({message: error.message})
    }
})

habitsRouter.patch('/:id', getHabit, async(request, response) => {
    const body = request.body
    response.habit.habit_track = body.habit_track
    try {
        const updatedHabit = await response.habit.save()
        response.status(201).json(updatedHabit)
    } 
    catch(error) {
        response.status(500).json({message: error.message})
    }  
})

habitsRouter.delete('/:id', getHabit, async(request, response) => {
    try {
        await response.habit.remove()
        response.status(204).end()
    }
    catch(error) {
        response.status(500).json({message: error.message})
    }
})

async function getHabit(request, response, next) {
    const decodedToken = await jwt.verify(request.token, process.env.SECRET)
    let habit
    try {
        const User = await User.findById(decodedToken.id)
        habit = await User.findById(request.params.id)

        if(habit.user.toString() === user.id.toString()) {
            response.habit = habit
        }
        else {
            return response.status(404).json({message: 'Cannot find Habit!'})
        }
    }
    catch(exception) {
        next(exception)
    }
} 

module.exports = habitsRouter 