import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const UserGreeting = () => {
  const { user } = useContext(AppContext)

  return <div>Welcome {user.userName}!</div>
}
export default UserGreeting
