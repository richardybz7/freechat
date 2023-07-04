import { createSelector } from "reselect"

const pendingContactsState = state => state.pendingContacts

export const selectPendingContacts = createSelector([pendingContactsState], prop => prop.pendingContacts)

export const selectLoadingPendingContacts = createSelector([pendingContactsState], prop => prop.loadingPendingContacts)