import PostsInterface from '../components/Feed/PostsInterface'

const Feed = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(true)

  return (
    <div>
      <div className="dashboard-interface">
        <PostsInterface />
      </div>
    </div>
  )
}
export default Feed
