import { CONTACTS_ACTION_TYPES } from "./contacts.types";

const CONTACTS_INTIAL_STATE = {
  contacts: [],
  userMessages: null,
  loadingUserMessages: false,
  loadingContacts: false,
  errorUserMessages: null,
  errorContacts: null
}

export const contactsReducer = (
  state = CONTACTS_INTIAL_STATE,
  action = {}
) => {
  const { type, payload } = action
  switch(type){
    case CONTACTS_ACTION_TYPES.GET_USER_MESSAGES_START:
      return { ...state, loadingUserMessages: true }
    case CONTACTS_ACTION_TYPES.GET_CONTACTS_START:
    case CONTACTS_ACTION_TYPES.ADD_CONTACTS_START:
    case CONTACTS_ACTION_TYPES.CREATE_CONTACTS_DOC_START:
      return { ...state, loadingContacts: true }

    case CONTACTS_ACTION_TYPES.GET_USER_MESSAGES_SUCCESS:
      return { ...state, loadingUserMessages: false, userMessages: payload }
    case CONTACTS_ACTION_TYPES.GET_CONTACTS_SUCCESS:
      return { ...state, loadingContacts: false, contacts: payload }
    case CONTACTS_ACTION_TYPES.ADD_CONTACTS_SUCCESS:
    case CONTACTS_ACTION_TYPES.CREATE_CONTACTS_DOC_SUCCESS:
      return { ...state, loadingContacts: false }

    case CONTACTS_ACTION_TYPES.GET_USER_MESSAGES_FAILED:
      return { ...state, loadingUserMessages: false, errorUserMessages: payload}
    case CONTACTS_ACTION_TYPES.GET_CONTACTS_FAILED:
    case CONTACTS_ACTION_TYPES.ADD_CONTACTS_FAILED:
    case CONTACTS_ACTION_TYPES.CREATE_CONTACTS_DOC_FAILED:
      return { ...state, loadingContacts: false, errorContacts: payload }
    
    default:
      return state
  }
}