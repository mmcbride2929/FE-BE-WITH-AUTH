import { Box } from '@chakra-ui/react'
import PostsInterface from '../components/Feed/PostsInterface'
import UserGreeting from '../components/Feed/UserGreeting'

const Feed = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(true)

  return (
    <>
      <Box className="dashboard-interface" bg="brand.100" p="25px">
        <UserGreeting />
        <PostsInterface />
      </Box>
    </>
  )
}
export default Feed
