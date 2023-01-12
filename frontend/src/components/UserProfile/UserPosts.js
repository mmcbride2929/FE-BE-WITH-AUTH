import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import Post from '../Feed/Post'
import axios from 'axios'
import { Box } from '@chakra-ui/react'

const UserPosts = ({ user }) => {
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

  // making a shallow copy of the state
  const postsCopy = [...posts]

  return (
    <>
      {users.length === 0 ? (
        <Box
          p={50}
          mt="45px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          LOADING POSTS
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {postsCopy
            .reverse()
            .filter((post) => post.createdBy === user._id)
            .map((post) => {
              return <Post key={post._id} post={post} users={users} />
            })}
        </Box>
      )}
    </>
  )
}
export default UserPosts
