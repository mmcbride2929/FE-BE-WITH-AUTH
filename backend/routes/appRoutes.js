const express = require('express')
const router = express.Router()

const {getPosts, getPost, postPost,updatePost,deletePost} = require('../controllers/postControllers')

router.route('/').get(getPosts).get(getPost).post(postPost)
router.route('/:id').put(updatePost).delete(deletePost)


module.exports = router