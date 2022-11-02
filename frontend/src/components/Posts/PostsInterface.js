import { useContext } from 'react'

import Posts from '../Posts/Posts'
import { Button } from '@chakra-ui/react'
import AppContext from '../../context/AppContext'

const PostsInterface = () => {
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
      <Posts />
    </div>
  )
}
export default PostsInterface
