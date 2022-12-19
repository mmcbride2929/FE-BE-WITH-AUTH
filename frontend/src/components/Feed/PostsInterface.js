import { Link as ReachLink } from 'react-router-dom'
import Posts from './Posts'
import { Button, Link } from '@chakra-ui/react'

const PostsInterface = () => {
  return (
    <div>
      <Link as={ReachLink} to={`/create-post`}>
        <Button
          size="lg"
          color={'white'}
          bg={'brand.200'}
          _hover={{
            bg: 'brand.300',
          }}
        >
          Create
        </Button>
      </Link>
      <Posts />
    </div>
  )
}
export default PostsInterface
