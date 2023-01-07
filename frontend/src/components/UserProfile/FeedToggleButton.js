import { Box, Button } from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext'

const FeedToggleButton = () => {
  const { feedToggle, setFeedToggle } = useContext(AppContext)

  const handleToggleFeed = () => {
    if (feedToggle === 'posts') {
      setFeedToggle('likes')
    }
    if (feedToggle === 'likes') {
      setFeedToggle('posts')
    }
  }

  useEffect(() => {
    setFeedToggle('posts')
  }, [])

  return (
    <Box w="50%" display="flex" justifyContent="center" mt="10px" p="5px">
      {feedToggle === 'posts' ? (
        <Button
          onClick={handleToggleFeed}
          bg="brand.500"
          variant="outline"
          w="95px"
          fontSize="0.9rem"
          shadow="md"
          size="md"
          color={'white'}
          my="7px"
          _hover={{
            bg: 'brand.400',
          }}
        >
          View Likes
        </Button>
      ) : (
        <Button
          onClick={handleToggleFeed}
          bg="brand.300"
          variant="outline"
          w="95px"
          fontSize="0.9rem"
          shadow="md"
          size="md"
          color={'white'}
          my="7px"
          _hover={{
            bg: 'brand.200',
          }}
        >
          View Posts
        </Button>
      )}
    </Box>
  )
}
export default FeedToggleButton
