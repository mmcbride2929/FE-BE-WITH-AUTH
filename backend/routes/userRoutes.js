const express = require('express')
const {
  getUser,
  getUsers,
  likePost,
} = require('../controllers/userControllers')
const router = express.Router()
const authenticateUser = require('../middleware/authenticateUser')

router.route('/:id').get(getUser).patch(authenticateUser, likePost)
router.route('/').get(getUsers)

module.exports = router
