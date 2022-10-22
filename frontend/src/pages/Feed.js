import { useContext } from 'react'
import CreatePostInterface from '../components/CreatePostInterface'
import PostInterface from '../components/PostInterface'
import AppContext from '../context/AppContext'


const Feed = () => {
  const { hidePosts, setHidePosts } = useContext(AppContext)

  return (
    <div>
      <div className="dashboard-interface">
        {!hidePosts ? <PostInterface /> : <CreatePostInterface />}
      </div>
    </div>
  )
}
export default Feed
