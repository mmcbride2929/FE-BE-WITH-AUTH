import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  CREATE_POST_ERROR,
  CREATE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
  LOGOUT_USER,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_SUCCESS,
} from './actions'

import { initialState } from './AppContext'

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values',
    }
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertType: 'success',
      alertText: 'Account Created, redirecting...',
    }
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successful, redirecting...',
    }
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    }
  }

  if (action.type === CREATE_POST_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertType: 'success',
      alertText: 'Post Created',
    }
  }

  if (action.type === CREATE_POST_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Post Could Not Be Created',
    }
  }

  if (action.type === UPDATE_POST_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertType: 'success',
      alertText: 'Post Updated',
    }
  }

  if (action.type === UPDATE_POST_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Post Could Not Be Updated',
    }
  }

  if (action.type === DELETE_POST_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertType: 'success',
      alertText: 'Post Deleted',
    }
  }

  if (action.type === DELETE_POST_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Post Could Not Be Deleted',
    }
  }

  if (action.type === LIKE_POST_SUCCESS) {
    console.log(action.payload.currentUser)
    return {
      ...state,
      user: action.payload.currentUser,
    }
  }

  if (action.type === UNLIKE_POST_SUCCESS) {
    return {
      ...state,
      user: action.payload.currentUser,
    }
  }

  throw new Error(`no such action : ${action.type}`)
}

export default reducer
