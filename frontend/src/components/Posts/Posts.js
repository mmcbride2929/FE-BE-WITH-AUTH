import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    try {
      const data = await axios.get(`http://localhost:2121/api/v1/posts`)

      setPosts(data.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [posts])

  return (
    <div>
      {posts.map((post) => {
        return <Post key={post._id} post={post} posts={posts} />
      })}
    </div>
  )
}
export default Posts
