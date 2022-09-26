const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const postRoutes = require('./routes/postRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

// initiating app
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/v1/posts', postRoutes)

// overwriting express default error handler
app.use(errorHandler)

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
