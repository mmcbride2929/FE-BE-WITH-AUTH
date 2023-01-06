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
      <Button
        onClick={handleToggleFeed}
        colorScheme={feedToggle === 'posts' ? 'red' : 'teal'}
        variant="outline"
        w="85px"
        size="sm"
      >
        View {feedToggle === 'posts' ? 'Likes' : 'Posts'}
      </Button>
    </Box>
  )
}
export default FeedToggleButton
