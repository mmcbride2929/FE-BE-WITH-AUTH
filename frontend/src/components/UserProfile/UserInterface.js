import { Box, chakra, Flex } from '@chakra-ui/react'
import UserPhoto from '../UserProfile/UserPhoto'
import FeedToggleButton from './FeedToggleButton'

const UserInterface = ({ user, formattedDate }) => {
  const { userName } = user

  return user ? (
    <>
      <Flex p={50} w="full">
        <Box
          w="100%"
          bg="white"
          border="1px"
          borderColor="silver"
          borderRadius="5px"
          shadow="md"
          overflow="hidden"
          mx="auto"
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
      </Flex>
    </>
  ) : (
    <>LOADING</>
  )
}
export default UserInterface
