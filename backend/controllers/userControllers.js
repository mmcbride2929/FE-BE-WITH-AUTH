const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// GET - /api/v1/user/:id
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
//can't do authentication yet
// check affronted can still allow us to add likes even if we have already liked a post
// if we can still post and it goes through to the database, we need to create an if statement filter for adding a like to the database
// PATCH - /api/v1/user/:id
const likePost = asyncHandler(async (req, res) => {
  console.log(req.body)

  const user = await User.findById(req.params.id)
  if (!user) {
    res.status(400)
    throw new Error('No matching users were found')
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedUser)
})

module.exports = { getUser, getUsers, likePost }
