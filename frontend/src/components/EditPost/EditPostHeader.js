import { Box, chakra } from '@chakra-ui/react'

const EditPostHeader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={50}
    >
      <chakra.h1
        fontSize={{ base: '1.6rem', sm: '1.75rem', md: '1.9rem' }}
        fontWeight="bold"
      >
        Edit Your Post
      </chakra.h1>
    </Box>
  )
}
export default EditPostHeader
