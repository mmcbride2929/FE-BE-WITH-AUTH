import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import Post from './Post'

const Posts = () => {
  const [users, setUsers] = useState([])

  const { fetchPosts, posts } = useContext(AppContext)

  const fetchUsers = async () => {
    const data = await axios.get(
      `https://fish-grid-production.up.railway.app/api/v1/user`
    )
    setUsers(data.data)
  }

  // making a shallow copy of the state
  const postsCopy = [...posts]

  useEffect(() => {
    fetchPosts()
    fetchUsers()
  }, [])

  return (
    <>
      {users.length === 0 ? (
        <Box mt="25px" p={100} w="350px" bg="white">
          LOADING POSTS
        </Box>
      ) : (
        <div>
          {postsCopy.reverse().map((post) => {
            return <Post key={post._id} post={post} users={users} />
          })}
        </div>
      )}
    </>
  )
}
export default Posts
