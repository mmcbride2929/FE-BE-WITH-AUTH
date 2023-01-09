import { Box } from '@chakra-ui/react'
import SinglePostInterface from '../components/SinglePost/SinglePostInterface'

const SinglePost = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(true)

  return (
    <Box
      p="25px"
      bg="brand.100"
      minH="85vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <SinglePostInterface />
    </Box>
  )
}
export default SinglePost
