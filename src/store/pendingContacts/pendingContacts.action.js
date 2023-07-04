import { createAction } from "../../utils/reducer.utils";
import { PENDING_CONTACTS_ACTION_TYPES } from "./pendingContacts.types";

export const getPendingContacts = (pendingContact) => 
  createAction(PENDING_CONTACTS_ACTION_TYPES.GET_PENDING_CONTACTS, pendingContact)

export const updatePendingContactsStart = (id, pendingContact) =>
  createAction(PENDING_CONTACTS_ACTION_TYPES.UPDATE_PENDING_CONTACTS_START, {id, pendingContact})
export const updatePendingContactsSuccess = () =>
  createAction(PENDING_CONTACTS_ACTION_TYPES.UPDATE_PENDING_CONTACTS_SUCCESS)
export const updatePendingContactsFailed = (err) =>
  createAction(PENDING_CONTACTS_ACTION_TYPES.UPDATE_PENDING_CONTACTS_FAILED, err)

export const removePendingContactsStart = (id, pendingContactID) =>
  createAction(PENDING_CONTACTS_ACTION_TYPES.REMOVE_PENDING_CONTACTS_START, {id, pendingContactID})
export const removePendingContactsSuccess = () =>
  createAction(PENDING_CONTACTS_ACTION_TYPES.REMOVE_PENDING_CONTACTS_SUCCESS)
export const removePendingContactsFailed = (err) =>
  createAction(PENDING_CONTACTS_ACTION_TYPES.REMOVE_PENDING_CONTACTS_FAILED, err)