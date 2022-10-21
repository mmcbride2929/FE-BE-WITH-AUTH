import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Alert = () => {
  const { alertType, alertText } = useContext(AppContext)
  return <div>{alertText}</div>
}
export default Alert
