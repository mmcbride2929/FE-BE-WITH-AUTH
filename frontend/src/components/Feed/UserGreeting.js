import { Box, chakra, Link, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Link as ReachLink } from 'react-router-dom'

const UserGreeting = () => {
  const { user } = useContext(AppContext)

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      p={50}
    >
      {/* Header */}
      <Box>
        <chakra.h1 fontSize="1.5rem" fontWeight="bold">
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
            my="7px"
            _hover={{
              bg: 'brand.400',
            }}
          >
            Create
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
export default UserGreeting
