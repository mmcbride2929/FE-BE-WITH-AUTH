import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

import FeedTitle from '../components/Feed/FeedTitle'
import Posts from '../components/Feed/Posts'

import UserGreeting from '../components/Feed/UserGreeting'

const Feed = ({ setNav }) => {
  useEffect(() => {
    // hiding navbar if not logged in
    setNav(true)
  }, [])

  return (
    <>
      <Box
        className="dashboard-interface"
        bg="brand.100"
        p="25px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <UserGreeting />
        <FeedTitle />
        <Posts />
      </Box>
    </>
  )
}
export default Feed
