import { OpenModal_SignInError, OpenModal_SignUpError } from "../store/display/display.action"
import { clearError } from "../store/error/error.action"
import { store } from "../store/store"
import { clearUserError } from "../store/user/user.action"
//order:
//  0 - email
//  1 - password
//  2 - confirm password
//  3 - user disp name
//  4 - self desc
export const addError = (errorObj, order, error) => {
  return Object.assign(errorObj, {[order]: error})
}
export const removeError = (errorObj, order) => {
  const bool = Object.hasOwn(errorObj, order)
  return bool && delete errorObj[order]
}
export const checkErrorExist = (errorObj, order) => {
  return Object.hasOwn(errorObj, order)
}
export const closeErrorPopup = (localError, userError) => {
  setTimeout(() => {
    userError && store.dispatch(OpenModal_SignInError(false))
    localError && store.dispatch(OpenModal_SignUpError(false))
    userError && store.dispatch(clearUserError())
    localError && store.dispatch(clearError())
  }, 4000);
}