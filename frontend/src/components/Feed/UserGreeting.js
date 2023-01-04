import { Box, chakra } from '@chakra-ui/react'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const UserGreeting = () => {
  const { user } = useContext(AppContext)

  return (
    <Box display="flex" justifyContent="center">
      {/* Header */}
      <chakra.h1 fontSize="1.5rem" fontWeight="bold">
        Welcome, {user.userName}!
      </chakra.h1>
    </Box>
  )
}
export default UserGreeting
