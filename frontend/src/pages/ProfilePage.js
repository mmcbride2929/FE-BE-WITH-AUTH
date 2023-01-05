import { Box, Button, chakra } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import UserInterface from '../components/UserProfile/UserInterface'
import UserLikes from '../components/UserProfile/UserLikes'
import UserPosts from '../components/UserProfile/UserPosts'

const ProfilePage = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [formattedDate, setFormattedDate] = useState('')
  const [feedToggle, setFeedToggle] = useState('posts')

  //getting item ID from react router's parameter
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const fetchUser = async () => {
    const data = await axios.get(`http://localhost:2121/api/v1/user/${path}`)
    setUser(data.data)
    formatDate(data.data.createdAt)
  }

  // formatting date
  const formatDate = (date) => {
    const splitHyphen = date.split('-')

    const year = splitHyphen[0]
    const month = splitHyphen[1]
    const day = splitHyphen[2].slice(0, 2)

    const formatComplete = `${month}-${day}-${year}`
    setFormattedDate(formatComplete)
  }

  const handleToggleFeed = () => {
    if (feedToggle === 'posts') {
      setFeedToggle('likes')
    }
    if (feedToggle === 'likes') {
      setFeedToggle('posts')
    }
  }

  useEffect(() => {
    fetchUser()
    setLoading(false)
  }, [])

  return !user ? (
    <>LOADING</>
  ) : (
    <Box bg="brand.100" p="25px">
      <UserInterface user={user} formattedDate={formattedDate} />

      {/* toggle between users posts and likes */}
      <Box display="flex" alignItems="center">
        <Box w="50%">
          <chakra.h1 fontWeight="bold" fontSize="1.1rem">
            {user.userName}'s {feedToggle}
          </chakra.h1>
        </Box>
        <Box w="50%" display="flex" justifyContent="right">
          <Button
            onClick={handleToggleFeed}
            colorScheme={feedToggle === 'posts' ? 'red' : 'teal'}
            variant="outline"
            w="100px"
          >
            View {feedToggle === 'posts' ? 'Likes' : 'Posts'}
          </Button>
        </Box>
      </Box>
      {/* feed toggle container */}
      <Box>
        {feedToggle === 'posts' ? (
          <UserPosts user={user} />
        ) : (
          <>
            <UserLikes user={user} />
          </>
        )}
      </Box>
    </Box>
  )
}
export default ProfilePage
