import EditPostInterface from '../components/EditPost/EditPostInterface'
import EditPostHeader from '../components/EditPost/EditPostHeader'
import { Box } from '@chakra-ui/react'

const EditPost = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(true)

  return (
    <Box p="25px">
      <EditPostHeader />
      <EditPostInterface />
    </Box>
  )
}
export default EditPost
