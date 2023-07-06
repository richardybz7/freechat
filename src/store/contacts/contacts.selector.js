import { createSelector } from "reselect"

const selectContactState = state => state.contacts

export const selectContacts = createSelector([selectContactState], prop => prop.contacts)

export const selectUserMessages = createSelector([selectContactState], prop => prop.userMessages)

export const selectLoadingUserMessages = createSelector([selectContactState], prop => prop.loadingUserMessages)