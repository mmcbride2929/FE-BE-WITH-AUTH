const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const postRoutes = require('./routes/postRoutes')

const app = express()

// routes
app.use('/api/v1/posts', postRoutes)

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
