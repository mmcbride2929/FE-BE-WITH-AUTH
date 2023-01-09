import { Box } from '@chakra-ui/react'
import CreatePostHeader from '../components/CreatePost/CreatePostHeader'
import CreatePostInterface from '../components/CreatePost/CreatePostInterface'

const CreatePost = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(true)

  return (
    <Box
      bg="brand.100"
      p="25px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <CreatePostHeader />
      <CreatePostInterface />
    </Box>
  )
}
export default CreatePost
