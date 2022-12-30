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
  const { password, email } = req.body

  if (!email || !password) {
    throw new Error('Please provide all values')
  }

  // find user by email and include password
  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    throw new Error('Invalid Credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new Error('Invalid Credentials')
  }

  const token = user.createJWT()

  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token })
})

module.exports = { register, login }
