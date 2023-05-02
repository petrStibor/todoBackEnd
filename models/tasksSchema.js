const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Task schema
const taskSchema = new Schema(
    {
        item: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('tasks', taskSchema)