const express = require('express')
const router = express.Router()

const {
  getPosts,
  postPost,
  updatePost,
  deletePost,
} = require('../controllers/postControllers')

router.route('/').get(getPosts).post(postPost)
router.route('/:id').put(updatePost).delete(deletePost)

module.exports = router
