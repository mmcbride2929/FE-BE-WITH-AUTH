import { useContext } from 'react'
import AppContext from '../context/AppContext'
import PostsContainer from './PostsContainer'
import { Button } from '@chakra-ui/react'

const PostInterface = () => {
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
        Create
      </Button>
      <PostsContainer />
    </div>
  )
}
export default PostInterface
