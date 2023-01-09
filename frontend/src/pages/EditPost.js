import EditPostInterface from '../components/EditPost/EditPostInterface'
import EditPostHeader from '../components/EditPost/EditPostHeader'
import { Box } from '@chakra-ui/react'

const EditPost = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(true)

  return (
    <Box
      p="25px"
      bg="brand.100"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <EditPostHeader />
      <EditPostInterface />
    </Box>
  )
}
export default EditPost
