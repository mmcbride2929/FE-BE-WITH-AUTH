const SinglePost = ({ post }) => {
  const { species, photo, length, _id } = post
  return (
    <>
      species:{species} - ID:{_id}
    </>
  )
}
export default SinglePost
