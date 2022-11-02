import { Link as ReachLink } from 'react-router-dom'
import { IconButton, Link } from '@chakra-ui/react'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const Post = ({ post }) => {
  const { species, length, bait, _id, createdBy } = post

  // getting user
  const { user, setPostEditMode } = useContext(AppContext)

  return (
    <div>
      <Link as={ReachLink} to={`/${_id}`}>
        {species}
      </Link>
      <p>{length}</p>
      {bait}
      <div>
        {createdBy === user._id ? (
          <>
            <Link as={ReachLink} to={`/${_id}/edit-post`}>
              <IconButton
                onClick={setPostEditMode(true)}
                variant="outline"
                color={'white'}
                bg="brand.300"
                fontSize="20px"
                _hover={{
                  color: 'brand.300',
                  bg: 'white',
                }}
                icon={<EditIcon />}
              />
            </Link>
            <IconButton
              // onClick={console.log('placeholder')}
              variant="outline"
              color={'white'}
              bg="brand.300"
              fontSize="20px"
              _hover={{
                color: 'brand.300',
                bg: 'white',
              }}
              icon={<DeleteIcon />}
            />
          </>
        ) : (
          <>
            'berries'{createdBy} ' '{user._id}
          </>
        )}
      </div>
    </div>
  )
}
export default Post
