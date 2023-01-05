import { Box, Image } from '@chakra-ui/react'
import photo from '../../assets/profile-picture.png'

const UserPhoto = () => {
  return (
    <Box display="flex" justifyContent="center" p="10px" mt="10px">
      <Image src={photo} w={'100px'} borderRadius={'50px'} />
    </Box>
  )
}
export default UserPhoto
