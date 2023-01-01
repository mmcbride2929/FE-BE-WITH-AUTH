import { Link as ReachLink } from 'react-router-dom'
import { Box, IconButton, Image, Link, Text, chakra } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import { DeleteIcon, EditIcon, StarIcon } from '@chakra-ui/icons'

const Post = ({ post, users }) => {
  const { species, photo, weight, length, bait, location, _id, createdBy } =
    post

  // getting user
  const { user, deletePost, likePost } = useContext(AppContext)

  const [author, setAuthor] = useState({})
  const [loading, setLoading] = useState(true)

  const handleDelete = () => {
    deletePost(_id)
  }

  const matchUser = (postCreatorId) => {
    const postAuthor = users.filter((u) => u._id === postCreatorId)
    setAuthor(postAuthor[0])
  }

  useEffect(() => {
    if (users.length > 1) {
      matchUser(createdBy)
    } else {
      setAuthor(users)
    }
    setLoading(false)
  }, [])

  return loading ? (
    <>loading</>
  ) : (
    // entire container
    <Box display="flex" flexDirection="column">
      {/* image container */}
      <Box>
        <Image src={photo.url} w="100px" />
      </Box>

      {/* icon container */}
      <Box>
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
      </Box>
      <IconButton
        onClick={() => likePost(user, _id)}
        variant="outline"
        color={user.likes.includes(post._id) ? 'gold' : 'silver'}
        bg="brand.300"
        fontSize="20px"
        _hover={{
          color: 'brand.300',
          bg: 'white',
        }}
        icon={<StarIcon />}
      />

      {/* description container */}
      <Box>
        <chakra.p>
          <Text as="span" fontWeight="bold">
            {' '}
            Angler:
          </Text>{' '}
          <Link as={ReachLink} to={`/user/${author._id}`}>
            {author.userName}
          </Link>
        </chakra.p>
        <chakra.p>
          <Text as="span" fontWeight="bold">
            {' '}
            Species:
          </Text>{' '}
          <Link as={ReachLink} to={`/post/${_id}`}>
            {species}
          </Link>
        </chakra.p>
        <chakra.p>
          <Text as="span" fontWeight="bold">
            {' '}
            Weight:
          </Text>{' '}
          {weight}
        </chakra.p>
        <chakra.p>
          <Text as="span" fontWeight="bold">
            {' '}
            Length:
          </Text>{' '}
          {length}
        </chakra.p>
        <chakra.p>
          <Text as="span" fontWeight="bold">
            {' '}
            Location:
          </Text>{' '}
          {location}
        </chakra.p>
        <chakra.p>
          <Text as="span" fontWeight="bold">
            {' '}
            Bait:
          </Text>{' '}
          {bait}
        </chakra.p>
      </Box>
    </Box>
  )
}
export default Post
