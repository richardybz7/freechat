import { all, call } from '@redux-saga/core/effects'
import { userSagas } from './user/user.saga'
import { immediateInfoSagas } from './immediateInfo/immediateInfo.saga'
import { contactsSagas } from './contacts/contacts.saga'
import { notificationsSaga } from './notifications/notifications.saga'
import { pendingContactsSagas } from './pendingContacts/pendingContacts.saga'

export function* rootSaga(){
  yield all([
    call(userSagas),
    call(immediateInfoSagas),
    call(contactsSagas),
    call(notificationsSaga),
    call(pendingContactsSagas)
  ])
}