const habitsRouter = require('express').Router()
const { response, json } = require('express')
const { request } = require('../app')
const Habit = require('../models/habit')

// Get All
habitsRouter.get('/', async(request, response) => {
    try {
        const habits = await Habit.find({})
        response.json(habits.map(habit => habit.toJSON()))
    }
    catch(error) {
        response.status(500).json({message: error.message})
    }
})

// Get one
habitsRouter.get('/:id', async(request, response) => {
    try {
        const habit = await Habit.findById(request.params.id)
        response.json(habit)
    }
    catch(error) {
        response.status(500).json({message: error.message})
    }
})

habitsRouter.post('/', async(request, response) => {
    const body = request.body
    const newHabit = new Habit({
        habit_name: body.name,
        habit_month: body.month
    })
    try {
        const savedHabit = await newHabit.save()
        response.status(201).json(savedHabit)
    }
    catch(error) {
        response.status(500).json({message: error.message})
    }
})

habitsRouter.patch('/:id', async(request, response) => {
    const body = response.body
    const newHabit = {
        habit_name: body.name,
        habit_month: body.month
    }
    try {
        const updatedHabit = await Habit.findByIdAndUpdate(request.params.id, newHabit, {new: true})
        response.status(201).json(updatedHabit)
    } 
    catch(error) {
        response.status(500).json({message: error.message})
    }  
})

habitsRouter.delete('/:id', async(request, response) => {
    try {
        await Habit.findByIdAndRemove(request.params.id)
        response.status(204).end()
    }
    catch(error) {
        response.status(500).json({message: error.message})
    }
})

module.exports = habitsRouter 