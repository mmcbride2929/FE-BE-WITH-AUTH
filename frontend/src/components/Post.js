const Post = ({ post }) => {
  const { species, length, bait } = post
  return (
    <div>
      {species}
      <p>{length}</p>
      {bait}
    </div>
  )
}
export default Post

// ingest props and destructure the object
// import chakra
// display the properties
