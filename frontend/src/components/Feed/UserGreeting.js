import { Box, chakra, Link, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Link as ReachLink } from 'react-router-dom'

const UserGreeting = () => {
  const { user } = useContext(AppContext)

  return (
    <Box
      py={50}
      w="100%"
      maxW="350px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bg="white"
        w="100%"
        maxWidth="350px"
        border="1px"
        borderColor="silver"
        borderRadius="5px"
        shadow="md"
        py="25px"
      >
        {/* Header */}
        <Box textAlign="center" w="100%">
          <chakra.h1
            fontSize={{ base: '1.5rem', sm: '1.6rem' }}
            fontWeight="bold"
          >
            Welcome, {user.userName}!
          </chakra.h1>
        </Box>

        <Box textAlign="center" mt="10px" fontSize="1.1rem">
          Cast, Catch, Share
        </Box>
        <Box textAlign="center">
          <Link
            as={ReachLink}
            to={`/create-post`}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Button
              size="md"
              color={'white'}
              bg={'brand.500'}
              marginTop={{ base: '35px', md: '35px' }}
              shadow="md"
              _hover={{
                bg: 'brand.400',
              }}
            >
              Create
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
export default UserGreeting
