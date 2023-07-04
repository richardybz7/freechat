import { USER_ACTION_TYPES } from "./user.types";

const USER_INITIAL_STATE = {
  user: {},
  signingUp: false,
  loggingIn: false,
  gettingContacts: false,
  loadingUser: false,
  errorUser: null
}

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {}
) => {
  const {type, payload} = action
  switch(type) {
    case USER_ACTION_TYPES.LOGIN_USER_START:
      return { ...state, loggingIn: true}
    case USER_ACTION_TYPES.GET_USER_START:
    case USER_ACTION_TYPES.UPDATE_USER_IDS_START:
    case USER_ACTION_TYPES.CHECK_USER_SESSION_START:
    case USER_ACTION_TYPES.SIGN_OUT_USER_START:
      return { ...state, loadingUser: true}
    case USER_ACTION_TYPES.CREATE_USER_START:
      return { ...state, signingUp: true}
    case USER_ACTION_TYPES.ADD_USER_CONTACT_START:
      return { ...state, gettingContacts: true}

    case USER_ACTION_TYPES.LOGIN_USER_SUCCESS:
      return { ...state, loggingIn: false }
    case USER_ACTION_TYPES.CREATE_USER_SUCCESS:
      return { ...state, signingUp: false}
    case USER_ACTION_TYPES.GET_USER_SUCCESS:
      return { ...state, loadingUser: false, user: payload}
    case USER_ACTION_TYPES.UPDATE_USER_IDS_SUCCESS:
    case USER_ACTION_TYPES.CHECK_USER_SESSION_SUCCESS:
      return { ...state, loadingUser: false}
    case USER_ACTION_TYPES.SIGN_OUT_USER_SUCCESS:
      return { ...state, loadingUser: false, user: payload}
    case USER_ACTION_TYPES.ADD_USER_CONTACT_SUCCESS:
      return { ...state, gettingContacts: false }

    case USER_ACTION_TYPES.LOGIN_USER_FAILED:
      return { ...state, errorUser: payload, loggingIn: false}
    case USER_ACTION_TYPES.CREATE_USER_FAILED:
      return { ...state, errorUser: payload, signingUp: false}
    case USER_ACTION_TYPES.GET_USER_FAILED:
    case USER_ACTION_TYPES.UPDATE_USER_IDS_FAILED:
    case USER_ACTION_TYPES.CLEAR_ERROR:
    case USER_ACTION_TYPES.CHECK_USER_SESSION_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_USER_FAILED:
      return { ...state, errorUser: payload, loadingUser: false}
    case USER_ACTION_TYPES.ADD_USER_CONTACT_FAILED:
      return { ...state, errorUser: payload, gettingContacts: false}
      
    default:
      return state
  }
}