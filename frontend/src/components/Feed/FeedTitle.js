import { Box, chakra, Text } from '@chakra-ui/react'

const FeedTitle = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <chakra.h1
        fontSize={{ base: '1rem', sm: '1.1rem', md: '1.2rem' }}
        fontWeight="bold"
      >
        Latest Posts
      </chakra.h1>
    </Box>
  )
}
export default FeedTitle
