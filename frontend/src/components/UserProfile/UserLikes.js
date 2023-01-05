import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import Post from '../Feed/Post'

const UserLikes = ({ user }) => {
  const { fetchPosts, posts } = useContext(AppContext)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

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
          {posts
            .filter((post) => user.likes.includes(post._id))
            .map((post) => {
              return <Post key={post._id} post={post} users={users} />
            })}
        </div>
      )}
    </>
  )
}
export default UserLikes
