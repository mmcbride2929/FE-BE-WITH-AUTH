import { DeleteIcon, EditIcon, StarIcon } from '@chakra-ui/icons'
import { Box, IconButton, Link, Text, chakra, Image } from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link as ReachLink } from 'react-router-dom'
import AppContext from '../../context/AppContext'

//  author
const SinglePost = ({ post, author }) => {
  // getting user
  const { user, deletePost, likePost } = useContext(AppContext)

  // destructure post prop
  const { species, photo, length, weight, location, bait, _id, createdBy } =
    post

  const handleDelete = () => {
    deletePost(post._id)
  }

  return photo ? (
    // entire container
    <Box display="flex" flexDirection="column">
      {/* image container */}
      <Box>
        <Image src={photo.url} w="100px" />
      </Box>

      {/* icon container */}
      <Box>
        {post.createdBy === user._id ? (
          <>
            <Link as={ReachLink} to={`/edit-post/${post._id}`}>
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
        onClick={() => likePost(user, post._id)}
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
          {author ? (
            <Link as={ReachLink} to={`/user/${author._id}`}>
              {author.userName}
            </Link>
          ) : (
            <>unavailable</>
          )}
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
  ) : (
    <>Loading</>
  )
}
export default SinglePost
