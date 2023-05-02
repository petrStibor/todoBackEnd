const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT
 
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{console.log('Database connected.')})
    .catch(console.error)

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))

// import routes
const taskList = require('./routes/taskRoute')

// use routes for tasks
app.use('/', taskList)