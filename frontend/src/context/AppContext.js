import React, { useState, useContext, useReducer } from 'react'
import axios from 'axios'

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from './actions'
import reducer from './reducer'

const AppContext = React.createContext()

const user = localStorage.getItem('user')
const token = localStorage.getItem('token')

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
  user: user ? JSON.parse(user) : null,
  token: token,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // toggle between feed page interface
  const [hidePosts, setHidePosts] = useState(false)

  /* ******** functions ******** */
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post(
        'http://localhost:2121/api/v1/auth/register',
        currentUser
      )
      const { user, token } = response.data

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      })
      addUserToLocalStorage({ user, token })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const response = await axios.post(
        'http://localhost:2121/api/v1/auth/login',
        currentUser
      )

      const { user, token } = response.data
      console.log(user)
      console.log(token)
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      })

      addUserToLocalStorage({ user, token })
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const createPost = async (post) => {
    try {
      await axios.post('http://localhost:2121/api/v1/posts', post)

      dispatch({
        type: CREATE_POST_SUCCESS,
      })
    } catch (error) {
      dispatch({
        type: CREATE_POST_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        displayAlert,
        clearAlert,
        loginUser,
        hidePosts,
        setHidePosts,
        createPost,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
