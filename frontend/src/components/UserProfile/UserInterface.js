import { Box, chakra, Flex } from '@chakra-ui/react'
import UserPhoto from '../UserProfile/UserPhoto'
import FeedToggleButton from './FeedToggleButton'

const UserInterface = ({ user, formattedDate }) => {
  const { userName } = user

  return user ? (
    <>
      <Box
        py={50}
        w="full"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          w="100%"
          maxWidth="350px"
          bg="white"
          border="1px"
          borderColor="silver"
          borderRadius="5px"
          shadow="md"
          overflow="hidden"
        >
          <UserPhoto />

          <Box
            py={3}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <chakra.h1
              display="block"
              fontSize="1.4rem"
              color="gray.800"
              fontWeight="bold"
            >
              {userName}
            </chakra.h1>
            <chakra.p>
              Joined:{' '}
              <chakra.span fontSize="sm" color="gray.700">
                {formattedDate}
              </chakra.span>
            </chakra.p>
            <FeedToggleButton />
          </Box>
        </Box>
      </Box>
    </>
  ) : (
    <Box display="flex" alignItems="center" justifyContent="center">
      LOADING
    </Box>
  )
}
export default UserInterface
