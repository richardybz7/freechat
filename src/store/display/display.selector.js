import { createSelector } from "reselect";

const selectDisplayReducer = state => state.display

export const select_isOpen_SignInError = createSelector(
  [selectDisplayReducer],
  display => display.isOpen_SignInError
)
export const select_isOpen_SignUpError = createSelector(
  [selectDisplayReducer],
  display => display.isOpen_SignUpError
)
export const select_isOpen_RoomAvatarModal = createSelector(
  [selectDisplayReducer], 
  display => display.isOpen_RoomAvatarModal
)
export const select_isOpen_LeftNav = createSelector(
  [selectDisplayReducer], 
  display => display.isOpen_LeftNav
)
export const select_isOpen_Menu = createSelector(
  [selectDisplayReducer], 
  display => display.isOpen_Menu
)
export const select_isOpen_AddRoom = createSelector(
  [selectDisplayReducer],
  display => display.isOpen_AddRoom
)
export const select_isOpen_Search = createSelector(
  [selectDisplayReducer],
  display => display.isOpen_Search
)
export const select_isOpen_Styles = createSelector(
  [selectDisplayReducer], 
  display => display.isOpen_Styles
)
export const select_isOpen_LeftUserAction = createSelector(
  [selectDisplayReducer], 
  display => display.isOpen_LeftUserAction
)
export const select_isOpen_Notification = createSelector(
  [selectDisplayReducer], 
  display => display.isOpen_Notification
)
export const select_contactMessage = createSelector(
  [selectDisplayReducer], 
  display => display.contact
)