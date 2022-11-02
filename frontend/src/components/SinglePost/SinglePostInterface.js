import SinglePost from './SinglePost'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SinglePostInterface = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)

  // getting item ID from react router's parameter
  const location = useLocation()
  const path = location.pathname.split('/')[1]

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
    setLoading(false)
  }, [])

  return <>{!loading ? <SinglePost post={post} /> : <>Loading</>}</>
}
export default SinglePostInterface
