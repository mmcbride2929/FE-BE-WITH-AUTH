const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'Please add a name'],
      minLength: 3,
      maxLength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email',
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minLength: 6,
      select: false, // find method will not find by password
    },
  },
  { timestamps: true }
)

// before saving document, hash pw
userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// creating jwt
userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('User', userSchema)
