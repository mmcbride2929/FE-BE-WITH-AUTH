import { DeleteIcon, EditIcon, StarIcon } from '@chakra-ui/icons'
import { IconButton, Link } from '@chakra-ui/react'
import { useContext } from 'react'
import { Link as ReachLink } from 'react-router-dom'
import AppContext from '../../context/AppContext'

const SinglePost = ({ post }) => {
  // getting user
  const { user } = useContext(AppContext)
  const { createdBy } = user

  // destructure post prop
  const { species, photo, length, _id } = post

  return (
    <>
      species:{species} - ID:{_id}
      <div>
        {createdBy === user._id ? (
          <>
            <Link as={ReachLink} to={`/edit-post/${_id}`}>
              <IconButton
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
              // onClick={handleDelete}
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
          <></>
        )}

        <IconButton
          // onClick={handleDelete}
          variant="outline"
          color={'white'}
          bg="brand.300"
          fontSize="20px"
          _hover={{
            color: 'brand.300',
            bg: 'white',
          }}
          icon={<StarIcon />}
        />
      </div>
    </>
  )
}
export default SinglePost
