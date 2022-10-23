const jwt = require('jsonwebtoken')

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization
  console.log(authHeader)

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(404).json({ msg: 'Could Not Authenticate' })
    throw new Error('Authentication Invalid')
  }

  const token = authHeader.split(' ')[1]

  try {
    payload = jwt.verify(token, process.env.JWT_SECRET)

    req.user = payload
    next()
  } catch (error) {
    console.log(error)
    res.status(404).json({ msg: 'Could Not Authenticate' })
    throw new Error('Authentication Invalid')
  }
}

module.exports = authenticateUser
