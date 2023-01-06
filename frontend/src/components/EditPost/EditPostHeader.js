import { Box, chakra, Link, Button } from '@chakra-ui/react'

import { Link as ReachLink } from 'react-router-dom'

const EditPostHeader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={50}
    >
      <chakra.h1 fontSize="1.5rem" fontWeight="bold">
        Edit Your Post
      </chakra.h1>
    </Box>
  )
}
export default EditPostHeader
