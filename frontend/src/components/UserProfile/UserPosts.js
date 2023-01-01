import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import Post from '../Feed/Post'

const UserPosts = ({ user }) => {
  const { fetchPosts, posts } = useContext(AppContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? (
        <>LOADING</>
      ) : (
        <div>
          {posts
            .filter((post) => post.createdBy === user._id)
            .map((post) => {
              return <Post key={post._id} post={post} users={user} />
            })}
        </div>
      )}
    </>
  )
}
export default UserPosts
