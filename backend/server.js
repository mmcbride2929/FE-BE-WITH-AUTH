const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const appRoutes = require('./routes/appRoutes')

const app = express()



// routes
app.use('api/v1/posts', appRoutes)

app.listen(port , ()=>{
    console.log(`running on port ${port}`);
})