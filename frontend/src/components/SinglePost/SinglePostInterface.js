import Post from '../Feed/Post'
import axios from 'axios'
import AppContext from '../../context/AppContext'
import { Box, Button } from '@chakra-ui/react'
import { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SinglePostInterface = () => {
  const [post, setPost] = useState()

  //  author state
  const [author, setAuthor] = useState([])

  // getting item ID from react router's parameter
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const navigate = useNavigate()

  // getting user
  const { user, deletePost, alertText } = useContext(AppContext)

  const fetchPost = async () => {
    try {
      const data = await axios.get(`http://localhost:2121/api/v1/posts/${path}`)
      setPost(data.data)

      getAuthor(data.data.createdBy)
    } catch (error) {
      console.log(error)
    }
  }

  const getAuthor = async (createdBy) => {
    const response = await axios.get(
      `http://localhost:2121/api/v1/user/${createdBy}`
    )
    setAuthor([response.data])
  }

  const handleDelete = () => {
    deletePost(post._id)
    setTimeout(() => {
      navigate('/feed')
    }, 2500)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      {author.length === 0 ? (
        <>LOADING</>
      ) : (
        <Box>
          {/* single post component */}
          <Post post={post} users={author} />

          {/* back button */}
          <Box w="100%" display="flex" justifyContent="center">
            <Button
              onClick={() => navigate('/feed')}
              size="md"
              color={'white'}
              bg={'brand.500'}
              my="10px"
              shadow="md"
              _hover={{
                bg: 'brand.400',
              }}
            >
              Back
            </Button>
          </Box>
        </Box>
      )}
    </>
  )
}
export default SinglePostInterface
