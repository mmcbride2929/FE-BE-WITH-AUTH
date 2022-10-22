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
