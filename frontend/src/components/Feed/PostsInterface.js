import { Link as ReachLink } from 'react-router-dom'
import Posts from './Posts'
import { Button, Link, chakra, Box } from '@chakra-ui/react'

const PostsInterface = () => {
  // getting alert status

  return (
    <Box>
      <Box textAlign="center" mt="10px" fontSize="1.1rem">
        Cast, Catch, Share
      </Box>
      <Box textAlign="center">
        <Link as={ReachLink} to={`/create-post`}>
          <Button
            size="md"
            color={'white'}
            bg={'brand.200'}
            my="7px"
            _hover={{
              bg: 'brand.300',
            }}
          >
            Create
          </Button>
        </Link>
      </Box>
      <Posts />
    </Box>
  )
}
export default PostsInterface
