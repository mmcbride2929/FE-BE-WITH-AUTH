import { useContext, useEffect } from 'react'
import CreatePostInterface from '../components/CreatePost/CreatePostInterface'
import PostsInterface from '../components/Feed/PostsInterface'
import AppContext from '../context/AppContext'

const Feed = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(true)

  const { hidePosts, setHidePosts } = useContext(AppContext)

  useEffect(() => {
    setHidePosts(false)
  }, [])

  return (
    <div>
      <div className="dashboard-interface">
        {!hidePosts ? <PostsInterface /> : <CreatePostInterface />}
      </div>
    </div>
  )
}
export default Feed
