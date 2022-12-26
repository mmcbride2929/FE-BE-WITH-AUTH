const express = require('express')
const { getUser, getUsers } = require('../controllers/userControllers')
const router = express.Router()

router.route('/:id').get(getUser)
router.route('/').get(getUsers)

module.exports = router
