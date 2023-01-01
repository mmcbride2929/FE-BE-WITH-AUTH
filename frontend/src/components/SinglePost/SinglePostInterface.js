import SinglePost from './SinglePost'
import axios from 'axios'
import AppContext from '../../context/AppContext'
import { IconButton } from '@chakra-ui/react'
import { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'

const SinglePostInterface = () => {
  const [post, setPost] = useState([])

  //  author state
  const [author, setAuthor] = useState()

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
    setAuthor(response.data)
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
      {!post ? (
        <>LOADING</>
      ) : (
        <>
          {/* interactive icons */}
          <IconButton
            onClick={() => navigate('/feed')}
            variant="outline"
            color={'white'}
            bg="brand.300"
            fontSize="20px"
            _hover={{
              color: 'brand.300',
              bg: 'white',
            }}
            icon={<ArrowBackIcon />}
          />
          <IconButton
            onClick={() => navigate(`/edit-post/${path}`)}
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

          {/* single post component */}

          <SinglePost post={post} author={author} />
        </>
      )}
    </>
  )
}
export default SinglePostInterface
