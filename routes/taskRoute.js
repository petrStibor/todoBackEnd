const router = require('express').Router()
const taskModel = require('../models/tasksSchema')


// get route for all tasks
router.get('/tasks', async (req,res)=>{
    const allTasks = await taskModel.find({})
    res.status(200).json(allTasks)
})

// post route for new tasks
router.post('/tasks/new/', async (req,res)=>{
    const newTask = new taskModel({
        item: req.body.item
    })
    const saveNewTask = await newTask.save()
    res.status(200).json(newTask)
})

// delete task
router.delete('/tasks/:id', async (req,res)=>{
    const deleteTask = await taskModel.findByIdAndDelete(req.params.id)
    res.status(200).json('Task was deleted!')
    })
    


// export models
module.exports = router