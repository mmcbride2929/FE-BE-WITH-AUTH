import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import Post from '../Feed/Post'

const UserLikes = ({ user }) => {
  const { fetchPosts, posts } = useContext(AppContext)
  const [loading, setLoading] = useState(true)

  // bug
  const test = [user]
  console.log(test)

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
            .filter((post) => user.likes.includes(post._id))
            .map((post) => {
              return <Post key={post._id} post={post} users={test} />
            })}
        </div>
      )}
    </>
  )
}
export default UserLikes
