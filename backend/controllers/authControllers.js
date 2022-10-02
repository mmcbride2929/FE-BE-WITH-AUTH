const asyncHandler = require('express-async-handler')
const { StatusCodes } = require('http-status-codes')
const User = require('../models/userModel')

const register = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body

  // checking for missing fields
  if (!userName || !email || !password) {
    throw new Error('please provide all values')
  }

  // checking for duplicate emails
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new Error('Account associated with that email already exists')
  }

  // creating user
  const user = await User.create({ userName, email, password })
  const token = user.createJWT()
  res
    .status(StatusCodes.OK)
    .send({ user: { userName: user.userName, email: user.email }, token })
})

const login = asyncHandler(async (req, res) => {
  res.status(200).send('login')
})
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).send('update user')
})

module.exports = { register, login, updateUser }
