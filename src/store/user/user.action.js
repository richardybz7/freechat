import { createAction } from "../../utils/reducer.utils"
import { getContactsStart } from "../contacts/contacts.action"
import { getPendingContacts } from "../pendingContacts/pendingContacts.action"
import { store } from "../store"
import { USER_ACTION_TYPES } from "./user.types"

export const loginStart = (email, password) => 
  createAction(USER_ACTION_TYPES.LOGIN_USER_START, {email, password})
export const loginSuccess = () => 
  createAction(USER_ACTION_TYPES.LOGIN_USER_SUCCESS)
export const loginFailed = (err) => 
  createAction(USER_ACTION_TYPES.LOGIN_USER_FAILED, err)

export const createUserStart = (userInput) => 
  createAction(USER_ACTION_TYPES.CREATE_USER_START, userInput)
export const createUserSuccess = () =>
  createAction(USER_ACTION_TYPES.CREATE_USER_SUCCESS)
export const createUserFailed = (err) =>
  createAction(USER_ACTION_TYPES.CREATE_USER_FAILED, err)

export const getUserStart = (id) => 
  createAction(USER_ACTION_TYPES.GET_USER_START, id)
export const getUserSuccess = (userData) => {
  return createAction(USER_ACTION_TYPES.GET_USER_SUCCESS, userData)
}
export const getUserFailed = (err) =>
  createAction(USER_ACTION_TYPES.GET_USER_FAILED, err)

export const clearUserError = () =>
  createAction(USER_ACTION_TYPES.CLEAR_ERROR, null)

export const checkUserSessionStart = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_START)
export const checkUserSessionSuccess = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_SUCCESS)
export const checkUserSessionFailed = (err) =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_FAILED, err)

export const signOutUserStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_USER_START)
export const signOutUserSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_USER_SUCCESS, null)
export const signOutUserFailed = (err) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_USER_FAILED, err)

export const addUserContactStart = (contactID, id) =>
  createAction(USER_ACTION_TYPES.ADD_USER_CONTACT_START, {contactID, id})
export const addUserContactSuccess = () =>
  createAction(USER_ACTION_TYPES.ADD_USER_CONTACT_SUCCESS)
export const addUserContactFailed = (err) =>
  createAction(USER_ACTION_TYPES.ADD_USER_CONTACT_FAILED, err)