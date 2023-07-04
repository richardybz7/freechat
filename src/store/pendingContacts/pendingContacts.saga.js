import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { PENDING_CONTACTS_ACTION_TYPES } from './pendingContacts.types'
import { removeArrayElements, updateArrayElements } from '../../utils/firebase.utils'
import { removePendingContactsSuccess, updatePendingContactsFailed, updatePendingContactsSuccess } from './pendingContacts.action'
import { addNotificationStart } from '../notifications/notifications.action'

export function* updatePendingContacts({payload: {id, pendingContact}}){
  try{
    yield call(updateArrayElements, id, 'USERS', 'pendingContacts', pendingContact)
    yield put(updatePendingContactsSuccess())
  }
  catch(err){
    yield put(updatePendingContactsFailed(err))
  }
}
export function* removePendingContacts({payload: {id, pendingContactID}}){
  try{
    yield call(removeArrayElements, id, 'USERS', 'pendingContacts', pendingContactID)
    yield put(removePendingContactsSuccess())
  }
  catch(err){
    yield put()
  }
}

export function* onUpdatePendingContactsStart(){
  yield takeLatest(PENDING_CONTACTS_ACTION_TYPES.UPDATE_PENDING_CONTACTS_START, updatePendingContacts)
}
export function* onRemovePendingContacts(){
  yield takeLatest(PENDING_CONTACTS_ACTION_TYPES.REMOVE_PENDING_CONTACTS_START, removePendingContacts)
}

export function* pendingContactsSagas(){
  yield all([
    call(onUpdatePendingContactsStart),
    call(onRemovePendingContacts)
  ])
}