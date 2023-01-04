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

  const [author, setAuthor] = useState()
  const [loading, setLoading] = useState(true)
  const [test, setTest] = useState('')

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
      setAuthor(users[0])
    }
    setLoading(false)
  }, [])

  return loading ? (
    <>loading</>
  ) : (
    // entire container
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      bg="white"
      border="1px"
      borderColor="silver"
      borderRadius="5px"
      my="15px"
    >
      {/* Post Creator Username */}
      <Box>
        <chakra.p fontWeight="bold" py="5px" px="10px" fontSize="1.05rem">
          <Link
            as={ReachLink}
            to={'/user/63b45ecff2a19c0832fd28f7'}
            // 63b45ecff2a19c0832fd28f7
            _hover={{
              color: 'brand.400',
            }}
          >
            {author.userName}
          </Link>
        </chakra.p>
      </Box>

      {/* image container */}
      <Box display="flex" justifyContent="center">
        <Link as={ReachLink} to={`/post/${_id}`}>
          <Image
            src={photo.url}
            w="100%"
            objectFit="cover"
            _hover={{
              cursor: 'pointer',
            }}
          />
        </Link>
      </Box>

      {/* icon container */}
      <Box pt="5px" px="10px" mt="5px">
        <IconButton
          onClick={() => likePost(user, _id)}
          variant="outline"
          color={user.likes.includes(post._id) ? 'gold' : 'silver'}
          bg="brand.300"
          h="35px"
          fontSize="20px"
          _hover={{
            color: 'brand.300',
            bg: 'white',
          }}
          icon={<StarIcon w="17px" />}
        />
        {createdBy === user._id ? (
          <>
            {/* Post Image */}
            <Link as={ReachLink} to={`/edit-post/${_id}`}>
              <IconButton
                variant="outline"
                color={'white'}
                bg="brand.300"
                h="35px"
                fontSize="20px"
                mx="5px"
                _hover={{
                  color: 'brand.300',
                  bg: 'white',
                }}
                icon={<EditIcon w="17px" />}
              />
            </Link>
            <IconButton
              onClick={handleDelete}
              variant="outline"
              color={'white'}
              bg="brand.300"
              h="35px"
              fontSize="20px"
              _hover={{
                color: 'brand.300',
                bg: 'white',
              }}
              icon={<DeleteIcon w="17px" />}
            />
          </>
        ) : (
          <></>
        )}
      </Box>

      {/* description container */}
      <Box py="5px" px="10px">
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
          {weight.toString().substring(0, 3)}
        </chakra.p>
        <chakra.p>
          <Text as="span" fontWeight="bold">
            {' '}
            Length:
          </Text>{' '}
          {length.toString().substring(0, 3)}
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
