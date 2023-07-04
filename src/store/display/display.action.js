import { DISPLAY_ACTION_TYPES } from "./display.types";
import { createAction } from "../../utils/reducer.utils";

export const OpenModal_SignInError = (isSignInErrorOpen) => 
  createAction(DISPLAY_ACTION_TYPES.SET_SIGNIN_ERROR_OPEN, isSignInErrorOpen)
export const OpenModal_SignUpError = (isSignUpErrorOpen) => 
  createAction(DISPLAY_ACTION_TYPES.SET_SIGNUP_ERROR_OPEN, isSignUpErrorOpen)
export const OpenModal_RoomAvatar = (isRoomAvatarOpen) => 
  createAction(DISPLAY_ACTION_TYPES.SET_ROOM_AVATAR_MODAL_OPEN, isRoomAvatarOpen)
export const OpenLeftNav = (isLeftNavOpen) =>
  createAction(DISPLAY_ACTION_TYPES.SET_LEFT_NAV_OPEN, isLeftNavOpen)
export const OpenMenu = (isLeftMenuOpen) =>
  createAction(DISPLAY_ACTION_TYPES.SET_MENU_OPEN, isLeftMenuOpen)
export const OpenAddRoom = (isAddOpen) =>
  createAction(DISPLAY_ACTION_TYPES.SET_ADD_ROOM_OPEN, isAddOpen)
export const OpenSearch = (isSearchOpen) =>
  createAction(DISPLAY_ACTION_TYPES.SET_SEARCH_OPEN, isSearchOpen)
export const OpenStyles = (isStylesOpen) =>
  createAction(DISPLAY_ACTION_TYPES.SET_STYLES_OPEN, isStylesOpen)
export const OpenLeftUserAction = (isLeftUserActionOpen) =>
  createAction(DISPLAY_ACTION_TYPES.SET_LEFT_USER_ACTION_OPEN, isLeftUserActionOpen)
export const OpenNotification = (isNotificationOpen) =>
  createAction(DISPLAY_ACTION_TYPES.SET_NOTIFICATION_OPEN, isNotificationOpen)
export const SetContactMessage = (contact) =>
  createAction(DISPLAY_ACTION_TYPES.SET_CONTACT_MESSAGE, contact)
