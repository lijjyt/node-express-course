const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [24, 'name too long'],
    },
    completed: {
        type: Boolean,
        default: false,

    },

})

module.exports = mongoose.model('task', taskSchema)