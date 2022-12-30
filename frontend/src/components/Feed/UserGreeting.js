import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const UserGreeting = () => {
  const { user } = useContext(AppContext)

  return (
    <div>
      Welcome {user.userName}!
      {user.likes.map((m) => {
        return <p>- {m} -</p>
      })}
    </div>
  )
}
export default UserGreeting
