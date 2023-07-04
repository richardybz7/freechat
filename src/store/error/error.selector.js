import { createSelector } from "reselect"

const errorState = state => state.error

export const selectError = createSelector([errorState], prop => prop.error)