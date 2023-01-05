import { Link as ReachLink } from 'react-router-dom'
import { Box, IconButton, Image, Link, Text, chakra } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { BsHeart, BsFillHeartFill } from 'react-icons/bs'

const Post = ({ post, users }) => {
  const { species, photo, weight, length, bait, location, _id, createdBy } =
    post

  // getting user
  const { user, deletePost, likePost } = useContext(AppContext)

  const [author, setAuthor] = useState()
  const [loading, setLoading] = useState(true)

  const handleDelete = () => {
    deletePost(_id)
  }

  const matchUser = (postCreatorId) => {
    const postAuthor = users.filter((u) => u._id === postCreatorId)
    console.log(postAuthor[0])
    setAuthor(postAuthor[0])
  }

  useEffect(() => {
    // do we even need to have in if statement?
    // can we just run match user?
    console.log(createdBy)
    matchUser(createdBy)

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
            to={`/user/${author._id}`}
            _hover={{
              color: 'grey',
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
      <Box pt="5px" px="10px" mt="5px" display="flex" alignItems="center">
        {user.likes.includes(post._id) ? (
          <BsFillHeartFill
            className="icon heart"
            size={'22px'}
            w="19px"
            color="red"
            onClick={() => likePost(user, _id)}
          />
        ) : (
          <BsHeart
            display="inline"
            className="icon"
            size={'22px'}
            w="19px"
            color="silver"
            onClick={() => likePost(user, _id)}
          />
        )}
        {createdBy === user._id ? (
          <>
            {/* Post Image */}
            <Link as={ReachLink} to={`/edit-post/${_id}`}>
              <EditIcon
                w="27px"
                color="silver"
                h="23px"
                mx="15px"
                mb="1px"
                _hover={{
                  color: 'brand.400',
                }}
              />
            </Link>
            <DeleteIcon
              className="icon"
              w="27px"
              color="silver"
              h="22px"
              fontSize="20px"
              _hover={{
                color: 'brand.400',
              }}
              onClick={handleDelete}
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
          {weight.toString().substring(0, 3)} lbs.
        </chakra.p>
        <chakra.p>
          <Text as="span" fontWeight="bold">
            {' '}
            Length:
          </Text>{' '}
          {length.toString().substring(0, 3)}".
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
