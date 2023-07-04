import { NOTIFICATIONS_ACTION_TYPES } from "./notifications.types";

const NOTIFICATIONS_INITIAL_STATE = {
  notifications: [],
  loadingNotifications: false,
  errorNotifications: null
}

export const notificationsReducer = (
  state = NOTIFICATIONS_INITIAL_STATE,
  action = {}
) => {
  const {type, payload} = action
  switch(type){
    case NOTIFICATIONS_ACTION_TYPES.ADD_NOTIFICATION_START:
    case NOTIFICATIONS_ACTION_TYPES.ADD_NOTIFICATION_DOC_START:
    case NOTIFICATIONS_ACTION_TYPES.REMOVE_NOTIFICATION_START:
    case NOTIFICATIONS_ACTION_TYPES.GET_NOTIFICATIONS_START:
      return { ...state, loadingNotifications: true}
      
    case NOTIFICATIONS_ACTION_TYPES.ADD_NOTIFICATION_SUCCESS:
    case NOTIFICATIONS_ACTION_TYPES.ADD_NOTIFICATION_DOC_SUCCESS:
      return { ...state, loadingNotifications: false}
    case NOTIFICATIONS_ACTION_TYPES.GET_NOTIFICATIONS_SUCCESS:
    case NOTIFICATIONS_ACTION_TYPES.REMOVE_NOTIFICATION_SUCCESS:
      return { ...state, loadingNotifications: false, notifications: payload}

    case NOTIFICATIONS_ACTION_TYPES.ADD_NOTIFICATION_FAILED:
    case NOTIFICATIONS_ACTION_TYPES.ADD_NOTIFICATION_DOC_FAILED:
    case NOTIFICATIONS_ACTION_TYPES.REMOVE_NOTIFICATION_FAILED:
    case NOTIFICATIONS_ACTION_TYPES.GET_NOTIFICATIONS_FAILED:
      return { ...state, loadingNotifications: false, errorNotifications: payload}
    default:
      return state
  }
}