import { createSelector } from "reselect"

const selectNotificationState = state => state.notifications

export const selectNotifications = createSelector([selectNotificationState], prop => prop.notifications)
export const selectLoadingNotifications = createSelector([selectNotificationState], prop => prop.loadingNotifications)
export const selectErrorNotifications = createSelector([selectNotificationState], prop => prop.errorNotifications)