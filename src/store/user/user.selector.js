import { createSelector } from "reselect";

const selectUserState = state => state.user

export const selectUser = createSelector([selectUserState], prop => prop.user)

export const selectUserError = createSelector([selectUserState], prop => prop.errorUser)

export const selectLoadingUser = createSelector
  ([selectUserState], prop => prop.loadingUser)

export const selectSigningUp = createSelector
  ([selectUserState], prop => prop.signingUp)

export const selectIsLoggingIn = createSelector
  ([selectUserState], prop => prop.loggingIn)