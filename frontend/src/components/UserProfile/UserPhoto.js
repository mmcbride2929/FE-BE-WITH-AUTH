import { Image } from '@chakra-ui/react'
import photo from '../../assets/profile-picture.png'

const UserPhoto = () => {
  return (
    <div>
      <Image src={photo} w={'100px'} borderRadius={'50px'} />
    </div>
  )
}
export default UserPhoto
