const task = require('../models/task')


const getAllTasks = (req, res) => {
    res.send('1')
}

const createTask = async (req, res) => {
    const task = await task.create(req.body)
    res.status(201).json({ task})
}

const getTask = (req, res) => {
    
}

const updateTask = (req, res) => {
    
}

const deleteTask = (req, res) => {
    
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}