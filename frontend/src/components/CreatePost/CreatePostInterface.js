import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import CreatePostForm from './CreatePostForm'

const CreatePostInterface = () => {
  const { hidePosts, setHidePosts } = useContext(AppContext)

  return (
    <div>
      <IconButton
        onClick={() => setHidePosts(!hidePosts)}
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
      <CreatePostForm />
    </div>
  )
}
export default CreatePostInterface
