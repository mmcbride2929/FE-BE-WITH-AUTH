import { Link as ReachLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'

const Post = ({ post }) => {
  const { species, length, bait, _id } = post

  return (
    <div>
      <Link as={ReachLink} to={`/${_id}`}>
        {species}
      </Link>
      <p>{length}</p>
      {bait}
    </div>
  )
}
export default Post
