const getPost = (req, res) => {
  res.status(200).json({ msg: 'Get Post' })
}

const getPosts = (req, res) => {
  res.status(200).json({ msg: 'Get Posts' })
}

const postPost = (req, res) => {
  res.status(200).json({ msg: 'post Post' })
}

const updatePost = (req, res) => {
  res.status(200).json({ msg: `updated Post ${req.params.id}` })
}

const deletePost = (req, res) => {
  res.status(200).json({ msg: `deleted Post ${req.params.id}` })
}

module.exports = { getPost, getPosts, postPost, updatePost, deletePost }
