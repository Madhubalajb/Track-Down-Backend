const mongoose = require('mongoose')

const habitScheme = mongoose.Schema({
    habit_name: {
        type: String,
        required: true
    },
    habit_month: {
        type: String,
        required: true
    },
    habit_track: [Boolean]
})

habitScheme.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Habit = mongoose.model('Habit', habitScheme)

module.exports = Habit