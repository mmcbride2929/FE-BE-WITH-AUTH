import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import Post from '../Feed/Post'

const UserLikes = ({ user }) => {
  const { fetchPosts, posts } = useContext(AppContext)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    const data = await axios.get(
      `https://fish-grid-production.up.railway.app/api/v1/user`
    )
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
        <Box
          p={50}
          display="flex"
          alignItems="center"
          mt="45px"
          justifyContent="center"
        >
          LOADING LIKES
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {posts
            .filter((post) => user.likes.includes(post._id))
            .map((post) => {
              return <Post key={post._id} post={post} users={users} />
            })}
        </Box>
      )}
    </>
  )
}
export default UserLikes
