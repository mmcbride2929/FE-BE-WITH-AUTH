import { Box, chakra } from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import UserInterface from '../components/UserProfile/UserInterface'
import UserLikes from '../components/UserProfile/UserLikes'
import UserPosts from '../components/UserProfile/UserPosts'
import AppContext from '../context/AppContext'

const ProfilePage = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [formattedDate, setFormattedDate] = useState('')

  const { feedToggle, setFeedToggle } = useContext(AppContext)

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

  useEffect(() => {
    fetchUser()
    setLoading(false)
  }, [])

  return !user ? (
    <>LOADING</>
  ) : (
    <Box bg="brand.100" p="25px" minH="84vh">
      <UserInterface user={user} formattedDate={formattedDate} />

      {/* toggle between users posts and likes */}
      <Box display="flex" alignItems="center">
        <Box w="100%">
          <chakra.h1 textAlign="center" fontWeight="bold" fontSize="1.1rem">
            {user.userName}'s {feedToggle}
          </chakra.h1>
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
