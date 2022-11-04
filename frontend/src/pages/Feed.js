import { useContext } from 'react'
import CreatePostInterface from '../components/CreatePost/CreatePostInterface'
import PostsInterface from '../components/Feed/PostsInterface'
import AppContext from '../context/AppContext'

const Feed = () => {
  const { hidePosts } = useContext(AppContext)

  return (
    <div>
      <div className="dashboard-interface">
        {!hidePosts ? <PostsInterface /> : <CreatePostInterface />}
      </div>
    </div>
  )
}
export default Feed
