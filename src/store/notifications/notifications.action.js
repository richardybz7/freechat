import { createAction } from "../../utils/reducer.utils";
import { NOTIFICATIONS_ACTION_TYPES } from "./notifications.types";

export const addNotificationStart = (targetID, data) =>
  createAction(NOTIFICATIONS_ACTION_TYPES.ADD_NOTIFICATION_START, {targetID, data})
export const addNotificationSuccess = () =>
  createAction(NOTIFICATIONS_ACTION_TYPES.ADD_NOTIFICATION_SUCCESS)
export const addNotificationFailed = (err) =>
  createAction(NOTIFICATIONS_ACTION_TYPES.ADD_NOTIFICATION_FAILED, err)

export const getNotificationsStart = (id) =>
  createAction(NOTIFICATIONS_ACTION_TYPES.GET_NOTIFICATIONS_START, id)
export const getNotificationsSuccess = (notifications) =>
  createAction(NOTIFICATIONS_ACTION_TYPES.GET_NOTIFICATIONS_SUCCESS, notifications)
export const getNotificationsFailed = (err) =>
  createAction(NOTIFICATIONS_ACTION_TYPES.GET_NOTIFICATIONS_FAILED, err)

export const removeNotificationStart = (targetID, id) =>
  createAction(NOTIFICATIONS_ACTION_TYPES.REMOVE_NOTIFICATION_START, {targetID, id})
export const removeNotificationSuccess = () =>
  createAction(NOTIFICATIONS_ACTION_TYPES.REMOVE_NOTIFICATION_SUCCESS)
export const removeNotificationFailed = (err) =>
  createAction(NOTIFICATIONS_ACTION_TYPES.REMOVE_NOTIFICATION_FAILED, err)

export const createNotificationDocStart = (id) =>
  createAction(NOTIFICATIONS_ACTION_TYPES.CREATE_NOTIFICATION_DOC_START, id)
export const createNotificationDocSuccess = () =>
  createAction(NOTIFICATIONS_ACTION_TYPES.REMOVE_NOTIFICATION_SUCCESS)
export const createNotificationDocFailed = (err) =>
  createAction(NOTIFICATIONS_ACTION_TYPES.REMOVE_NOTIFICATION_FAILED, err)