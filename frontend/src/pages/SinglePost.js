import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IconButton, Link } from '@chakra-ui/react'
import { Link as ReachLink } from '@reach/router'
import { ArrowBackIcon } from '@chakra-ui/icons'

const SinglePost = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)

  // getting item ID from react router's parameter
  const location = useLocation()
  const path = location.pathname.split('/')[1]
  const { species, weight, bait } = post

  const navigate = useNavigate()

  const fetchPost = async () => {
    try {
      const data = await axios.get(`http://localhost:2121/api/v1/posts/${path}`)

      setPost(data.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
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

      {!loading ? <p>{species}</p> : <>Loading</>}
    </div>
  )
}
export default SinglePost

// singlePost is the container, build components like SinglePostTitle, SinglePostImage
