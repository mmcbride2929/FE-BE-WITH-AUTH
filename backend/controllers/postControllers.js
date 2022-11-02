const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')

// GET - /api/v1/posts/:id
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {
    res.status(400)
    throw new Error('No matching posts were found')
  }

  res.status(200).json(post)
})

// GET - /api/v1/posts
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find()

  if (!posts) {
    res.status(400)
    throw new Error('No matching posts were found')
  }

  res.status(200).json(posts)
})

// POST - /api/v1/posts
const createPost = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400)
    throw new Error('Please add text a field')
  }
  console.log(req.body)
  const post = await Post.create(req.body)
  res.status(200).json(post)
})

// PATCH - /api/v1/posts/:id
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  console.log(post)
  console.log(req.params.id)
  if (!post) {
    res.status(400)
    throw new Error('No matching posts were found')
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedPost)
})

// DELETE - /api/v1/posts/:id
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {
    res.status(400)
    throw new Error('No matching posts were found')
  }

  const deletedPost = await Post.findByIdAndDelete(req.params.id)
  res.status(200).json(deletedPost)
})

module.exports = { getPost, getPosts, createPost, updatePost, deletePost }
