import { useNavigate } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useLocation } from 'react-router-dom'
import PostInterfaceContainer from '../components/PostInterfaceContainer'

const SinglePost = () => {
  const navigate = useNavigate()

  // getting item ID from react router's parameter
  const location = useLocation()
  const path = location.pathname.split('/')[1]
  return (
    <div>
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

      <IconButton
        onClick={() => navigate(`/${path}/edit-post`)}
        variant="outline"
        color={'white'}
        bg="brand.300"
        fontSize="20px"
        _hover={{
          color: 'brand.300',
          bg: 'white',
        }}
        icon={<EditIcon />}
      />

      <IconButton
        onClick={() => console.log('placeholder')}
        variant="outline"
        color={'white'}
        bg="brand.300"
        fontSize="20px"
        _hover={{
          color: 'brand.300',
          bg: 'white',
        }}
        icon={<DeleteIcon />}
      />

      <PostInterfaceContainer />
    </div>
  )
}
export default SinglePost
