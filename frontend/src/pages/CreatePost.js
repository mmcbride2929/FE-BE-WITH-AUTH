import { ArrowBackIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import CreatePostInterface from '../components/CreatePost/CreatePostInterface'

const CreatePost = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(true)

  const navigate = useNavigate()
  return (
    <>
      <IconButton
        onClick={() => navigate('/feed')}
        variant="outline"
        color={'white'}
        bg={'brand.200'}
        fontSize="20px"
        _hover={{
          bg: 'brand.300',
        }}
        icon={<ArrowBackIcon />}
      />
      <CreatePostInterface />
    </>
  )
}
export default CreatePost
