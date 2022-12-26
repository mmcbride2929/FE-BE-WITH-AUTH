import { Link as ReachLink } from 'react-router-dom'
import { IconButton, Image, Link } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const Post = ({ post, users }) => {
  const { species, photo, length, bait, _id, createdBy } = post

  // getting user
  const { user, deletePost } = useContext(AppContext)

  const [author, setAuthor] = useState({})
  const [loading, setLoading] = useState(true)

  const handleDelete = () => {
    deletePost(_id)
  }

  const matchUser = (postCreatorId) => {
    const postAuthor = users.filter((u) => u._id === postCreatorId)
    setAuthor(postAuthor)
  }

  useEffect(() => {
    matchUser(createdBy)
    setLoading(false)
  }, [])

  return loading ? (
    <>loading</>
  ) : (
    <div>
      <Link as={ReachLink} to={`/post/${_id}`}>
        {species}
      </Link>
      <p>{length}</p>
      createdBy:{' '}
      <Link as={ReachLink} to={`/user/${author[0]._id}`}>
        <h1>{author[0].userName}</h1>
      </Link>{' '}
      userID: {author[0]._id}
      <Image src={photo.url} />
      <div>
        {createdBy === user._id ? (
          <>
            <Link as={ReachLink} to={`/edit-post/${_id}`}>
              <IconButton
                variant="outline"
                color={'white'}
                bg="brand.300"
                fontSize="20px"
                _hover={{
                  color: 'brand.300',
                  bg: 'white',
                }}
                icon={<EditIcon />}
              />
            </Link>
            <IconButton
              onClick={handleDelete}
              variant="outline"
              color={'white'}
              bg="brand.300"
              fontSize="20px"
              _hover={{
                color: 'brand.300',
                bg: 'white',
              }}
              icon={<DeleteIcon />}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
export default Post
