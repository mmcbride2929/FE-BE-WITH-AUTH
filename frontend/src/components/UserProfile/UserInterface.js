import { Box, chakra } from '@chakra-ui/react'

const UserInterface = ({ user, formattedDate }) => {
  const { userName } = user

  return user ? (
    <>
      <chakra.p>{userName}</chakra.p>

      <chakra.p>{formattedDate}</chakra.p>
    </>
  ) : (
    <>LOADING</>
  )
}
export default UserInterface
