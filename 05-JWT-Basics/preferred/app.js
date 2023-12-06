const express = require('express')
const app = express()

require('express-async-errors')
const { errorHandler } = require('./middleware/customErrors')
require('dotenv').config()

const router = require('./routes/main')

app.use(express.json())

app.use('/api/v1', router)

app.use(errorHandler)



const port = process.env.PORT || 3000

const start = async () => {
    try {
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()