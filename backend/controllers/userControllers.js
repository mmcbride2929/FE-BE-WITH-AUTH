const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// GET - /api/v1/user
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  console.log(user)

  if (!user) {
    res.status(400)
    throw new Error('No matching user were found')
  }

  res.status(200).json(user)
})

// GET - /api/v1/user
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find()

  if (!users) {
    res.status(400)
    throw new Error('No matching user were found')
  }

  res.status(200).json(users)
})

module.exports = { getUser, getUsers }
