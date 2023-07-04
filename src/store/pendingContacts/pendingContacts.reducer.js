import { PENDING_CONTACTS_ACTION_TYPES } from "./pendingContacts.types";

const INITIAL_PENDING_CONTACTS_STATE = {
  pendingContacts: [],
  loadingPendingContacts: false,
  errorPendingContacts: null
}

export const pendingContactsReducer = (
  state = INITIAL_PENDING_CONTACTS_STATE,
  action = {}
) => {
  const {type, payload} = action
  switch(type){
    case PENDING_CONTACTS_ACTION_TYPES.GET_PENDING_CONTACTS:
      return { ...state, pendingContacts: payload}
    case PENDING_CONTACTS_ACTION_TYPES.UPDATE_PENDING_CONTACTS_START:
    case PENDING_CONTACTS_ACTION_TYPES.REMOVE_PENDING_CONTACTS_START:
      return { ...state, loadingPendingContacts: true }

    case PENDING_CONTACTS_ACTION_TYPES.UPDATE_PENDING_CONTACTS_SUCCESS:
    case PENDING_CONTACTS_ACTION_TYPES.REMOVE_PENDING_CONTACTS_SUCCESS:
      return { ...state, loadingPendingContacts: false }

    case PENDING_CONTACTS_ACTION_TYPES.UPDATE_PENDING_CONTACTS_FAILED:
    case PENDING_CONTACTS_ACTION_TYPES.REMOVE_PENDING_CONTACTS_FAILED:
      return { ...state, loadingPendingContacts: false, errorPendingContacts: payload }
    default:
      return state
  }
}