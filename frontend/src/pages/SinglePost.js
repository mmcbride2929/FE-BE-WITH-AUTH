import SinglePostInterface from '../components/SinglePost/SinglePostInterface'

const SinglePost = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(true)

  return (
    <div>
      <SinglePostInterface />
    </div>
  )
}
export default SinglePost
