const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser')

// local imports
const postRoutes = require('./routes/postRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

// connect db
const connectDB = require('./config/db')

// initiating app
const app = express()

// middleware
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

//app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/user', userRoutes)

// overwriting express default error handler
app.use(errorHandler)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
