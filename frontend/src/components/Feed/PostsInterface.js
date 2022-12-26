import { Link as ReachLink } from 'react-router-dom'
import Posts from './Posts'
import { Button, Link } from '@chakra-ui/react'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const PostsInterface = () => {
  // getting alert status
  const { showAlert, alertText } = useContext(AppContext)

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
      {showAlert ? <p>{alertText}</p> : ''}
      <Posts />
    </div>
  )
}
export default PostsInterface
