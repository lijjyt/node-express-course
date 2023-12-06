const task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await task.find({})
    res.status(200).json({ tasks })
})

const createTask = asyncWrapper ( async (req, res) => {
    const task = await task.create(req.body)
    res.status(201).json({ task })
})

const getTask = asyncWrapper( async (req, res) => {
    const { id: taskID} = req.params
    const task = await task.findOne({_id: taskID})
    if (!task) {
        return next(createCustomError(`no task with ID : ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

const updateTask = asyncWrapper( async(req, res) => {
    const { id: taskID } = req.params
    const task= await task.findOneAndUpdate({id: taskID}, req.body, {
        new: true,
        runValidators: true,
    })
    if (!task) {
        return next(createCustomError(`no task with ID : ${taskID}`, 404))    
    }
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper( async (req, res) => {
    const { id: taskID} = req.params
    const task = await task.findOneAndDelete( {id: taskID})
    if(!task) {
        return res.status(404).json({msg: `no task with ID : ${taskID}`})
    }
    res.status(200).json({task})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}