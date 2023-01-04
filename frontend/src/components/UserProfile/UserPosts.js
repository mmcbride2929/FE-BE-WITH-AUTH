import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import Post from '../Feed/Post'

const UserPosts = ({ user }) => {
  const { fetchPosts, posts } = useContext(AppContext)
  const [loading, setLoading] = useState(true)

  // bug
  const test = [user]
  console.log(test)
  // the users prop was passed as just an object, but the post reads the data as if it were coming from an array

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
              return <Post key={post._id} post={post} users={test} />
            })}
        </div>
      )}
    </>
  )
}
export default UserPosts
