const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')
const cloudinary = require('../utils/cloudinary')

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
  const { species, photo, bait, location, length, weight, createdBy } = req.body

  if (!req.body) {
    res.status(400)
    throw new Error('Please add text a field')
  }

  // checking to make sure user added image
  try {
    if (photo) {
      const uploadRes = await cloudinary.uploader.upload(photo, {
        upload_preset: 'UserPosts',
      })

      if (uploadRes) {
        const post = new Post({
          species,
          photo: uploadRes,
          bait,
          location,
          length,
          weight,
          // likes,
          createdBy,
        })

        await Post.create(post)
        res.status(200).json(post)
      }
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error.message)
    throw new Error('Something went wrong on our end')
  }
})

// PATCH - /api/v1/posts/:id
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
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

  // deleting image from cloudinary library
  const deletedPost = await Post.findByIdAndDelete(req.params.id)
  const photoId = deletedPost.photo.public_id
  await cloudinary.uploader.destroy(photoId)

  res.status(200).json(deletedPost)
})

module.exports = { getPost, getPosts, createPost, updatePost, deletePost }
