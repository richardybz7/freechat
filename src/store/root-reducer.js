import { combineReducers } from 'redux'
import { userReducer } from './user/user.reducer'
import { immediateInfoReducer } from './immediateInfo/immediateInfo.reducer'
import { displayReducer } from './display/display.reducer'
import { contactsReducer } from './contacts/contacts.reducer'
import { notificationsReducer } from './notifications/notifications.reducer'
import { errorReducer } from './error/error.reducer'
import { pendingContactsReducer } from './pendingContacts/pendingContacts.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  immediateInfo: immediateInfoReducer,
  contacts: contactsReducer,
  pendingContacts: pendingContactsReducer,
  notifications: notificationsReducer,
  display: displayReducer,
  error: errorReducer
})