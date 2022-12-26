import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ProfilePage = () => {
  const [user, setUser] = useState({})

  //getting item ID from react router's parameter
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const fetchUser = async () => {
    const data = await axios.get(`http://localhost:2121/api/v1/user/${path}`)
    setUser(data.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      ProfilePage
      <>component a -- {user.userName} -- </>
      <>component b -- {user.email} -- </>
      <>component 3</>
    </div>
  )
}
export default ProfilePage

// need to get specific user we are requesting from the id onclick
// need to figure out how to fetch from the user collection
