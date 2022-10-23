import { Button } from '@chakra-ui/react'
import AppContext from '../context/AppContext'
import { useContext } from 'react'
import CreatePostForm from './CreatePostForm'
const CreatePostInterface = () => {
  const { hidePosts, setHidePosts } = useContext(AppContext)
  return (
    <div>
      <Button
        onClick={() => setHidePosts(!hidePosts)}
        size="lg"
        color={'white'}
        bg={'brand.200'}
        _hover={{
          bg: 'brand.300',
        }}
      >
        Go Back
      </Button>
      <CreatePostForm />
    </div>
  )
}
export default CreatePostInterface

// create onchange function
// create a
