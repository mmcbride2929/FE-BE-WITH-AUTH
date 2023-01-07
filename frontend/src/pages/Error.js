import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Error = ({ setNav }) => {
  // hiding nav
  setNav(false)

  return (
    <Box
      minH="90vh"
      textAlign="center"
      p="25px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      bg="brand.100"
    >
      <Heading
        display="inline-block"
        as="h2"
        fontSize="2.3rem"
        color="brand.400"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text mb={6}>The page you're looking for does not seem to exist</Text>

      <Button
        mt="35px"
        size="md"
        color={'white'}
        bg={'brand.500'}
        shadow="md"
        _hover={{
          bg: 'brand.400',
        }}
      >
        <Link to="/landing"> Go to Home</Link>
      </Button>
    </Box>
  )
}

export default Error
