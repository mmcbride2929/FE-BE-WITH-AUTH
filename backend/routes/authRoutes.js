const express = require('express')
const router = express.Router()
const {
  register,
  login,
  updateUser,
} = require('../controllers/authControllers')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').patch(updateUser)

module.exports = router
