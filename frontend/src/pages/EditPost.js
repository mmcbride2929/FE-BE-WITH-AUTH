import { ArrowBackIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import EditPostInterface from '../components/EditPost/EditPostInterface'

const EditPost = () => {
  const navigate = useNavigate()
  return (
    <>
      <IconButton
        onClick={() => navigate('/feed')}
        variant="outline"
        color={'white'}
        bg="brand.300"
        fontSize="20px"
        _hover={{
          color: 'brand.300',
          bg: 'white',
        }}
        icon={<ArrowBackIcon />}
      />
      <EditPostInterface />
    </>
  )
}
export default EditPost
