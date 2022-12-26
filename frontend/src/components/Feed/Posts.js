import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import Post from './Post'

const Posts = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  const { fetchPosts, posts } = useContext(AppContext)

  const fetchUsers = async () => {
    const data = await axios.get(`http://localhost:2121/api/v1/user`)
    setUsers(data.data)
  }

  useEffect(() => {
    fetchPosts()
    fetchUsers()

    setLoading(false)
  }, [])

  return (
    <>
      {users.length === 0 ? (
        <>LOADING</>
      ) : (
        <div>
          {posts.map((post) => {
            return <Post key={post._id} post={post} users={users} />
          })}
        </div>
      )}
    </>
  )
}
export default Posts
