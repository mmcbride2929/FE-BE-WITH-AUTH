import PostsInterface from '../components/Feed/PostsInterface'
import UserGreeting from '../components/Feed/UserGreeting'

const Feed = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(true)

  return (
    <div>
      <div className="dashboard-interface">
        <UserGreeting />
        <PostsInterface />
      </div>
    </div>
  )
}
export default Feed
