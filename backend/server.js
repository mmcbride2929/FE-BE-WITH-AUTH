const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// local imports
const postRoutes = require('./routes/postRoutes')
const authRoutes = require('./routes/authRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

// connect db
const connectDB = require('./config/db')

// initiating app
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/posts', postRoutes)

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
