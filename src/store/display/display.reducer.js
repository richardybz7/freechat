import { DISPLAY_ACTION_TYPES } from "./display.types"

export const DISPLAY_INITIAL_STATE = {
  isOpen_SignInError: false,
  isOpen_SignUpError: false,
  isOpen_RoomAvatarModal: false,
  isOpen_LeftNav: true,
  isOpen_Menu: false,
  isOpen_AddRoom: false,
  isOpen_Search: false,
  isOpen_Styles: false,
  isOpen_LeftUserAction: true,
  isOpen_Notification: false,
  contact:{}
}

export const displayReducer = (
  state = DISPLAY_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action
  switch(type) {
    case DISPLAY_ACTION_TYPES.SET_SIGNIN_ERROR_OPEN:
      return { ...state, isOpen_SignInError: payload }
    case DISPLAY_ACTION_TYPES.SET_SIGNUP_ERROR_OPEN:
      return { ...state, isOpen_SignUpError: payload }
    case DISPLAY_ACTION_TYPES.SET_ROOM_AVATAR_MODAL_OPEN:
      return { ...state, isOpen_RoomAvatarModal: payload }
    case DISPLAY_ACTION_TYPES.SET_LEFT_NAV_OPEN:
      return { ...state, isOpen_LeftNav: payload }
    case DISPLAY_ACTION_TYPES.SET_MENU_OPEN:
      return { ...state, isOpen_Menu: payload }
    case DISPLAY_ACTION_TYPES.SET_ADD_ROOM_OPEN:
      return { ...state, isOpen_AddRoom: payload }
    case DISPLAY_ACTION_TYPES.SET_SEARCH_OPEN:
      return { ...state, isOpen_Search: payload }
    case DISPLAY_ACTION_TYPES.SET_STYLES_OPEN:
      return { ...state, isOpen_Styles: payload }
    case DISPLAY_ACTION_TYPES.SET_LEFT_USER_ACTION_OPEN:
      return { ...state, isOpen_LeftUserAction: payload }
    case DISPLAY_ACTION_TYPES.SET_NOTIFICATION_OPEN:
      return { ...state, isOpen_Notification: payload }
    case DISPLAY_ACTION_TYPES.SET_CONTACT_MESSAGE:
      return { ...state, contact: payload }
    default:
      return state;
  }
}