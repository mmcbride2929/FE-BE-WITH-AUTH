import SinglePost from './SinglePost'
import axios from 'axios'
import AppContext from '../../context/AppContext'
import { IconButton } from '@chakra-ui/react'
import { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'

const SinglePostInterface = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)

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
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = () => {
    deletePost(post._id)
    setTimeout(() => {
      navigate('/feed')
    }, 2500)
  }

  useEffect(() => {
    fetchPost()
    setLoading(false)
  }, [])

  return (
    <>
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
      {user._id === post.createdBy ? (
        <>
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
        </>
      ) : (
        <></>
      )}
      {!loading ? (
        <>
          {alertText && alertText} <SinglePost post={post} />
        </>
      ) : (
        <>Loading</>
      )}
    </>
  )
}
export default SinglePostInterface
