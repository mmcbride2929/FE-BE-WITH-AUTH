const asyncHandler = require('express-async-handler')

const getPost = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Get Post' })
})

const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Get Posts' })
})

const createPost = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add text a field')
  }

  res.status(200).json({ msg: 'post Post' })
})

const updatePost = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `updated Post ${req.params.id}` })
})

const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `deleted Post ${req.params.id}` })
})

module.exports = { getPost, getPosts, createPost, updatePost, deletePost }
