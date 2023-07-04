import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { NOTIFICATIONS_ACTION_TYPES } from './notifications.types'
import { addDynamicListener, checkDocExist, createDoc, getDocument, removeField, updateField } from '../../utils/firebase.utils'
import { addNotificationDocFailed, addNotificationDocSuccess, addNotificationFailed, addNotificationSuccess, createNotificationDocFailed, createNotificationDocSuccess, getNotificationsFailed, getNotificationsSuccess, removeNotificationFailed, removeNotificationSuccess, removeNotificationsFailed } from './notifications.action'

export function* getNotifications({payload: id}){
  try{
    yield call(addDynamicListener, id, 'NOTIFICATIONS', getNotificationsSuccess)
  }
  catch(err){
    yield put(getNotificationsFailed(err))
  }
}
export function* addNotification({payload: {targetID, data}}){
  try{
    const docExists = yield call(checkDocExist, targetID, 'NOTIFICATIONS')
    if(docExists){
      yield call(updateField, targetID, 'NOTIFICATIONS', data.contactID, data)
    }
    else{
      const objectData = {
        [data.contactID] : data
      }
      yield call(createDoc, targetID, 'NOTIFICATIONS', objectData)
    }
    yield put(addNotificationSuccess())
  }
  catch(err){
    yield put(addNotificationFailed(err))
  }
}
export function* removeNotification({payload: {targetID,id}}){
  try{
    yield call(removeField, id, 'NOTIFICATIONS', targetID)
    yield put(removeNotificationSuccess())
  }
  catch(err){
    yield put(removeNotificationFailed(err))
  }
}
export function* createNotificationDoc({payload: id}){
  try{
    yield call(createDoc, id, 'NOTIFICATIONS', {})
    yield put(createNotificationDocSuccess())
  }
  catch(err){
    yield put(createNotificationDocFailed(err))
  }
}

export function* onGetNotificationsStart(){
  yield takeLatest(NOTIFICATIONS_ACTION_TYPES.GET_NOTIFICATIONS_START, getNotifications)
}
export function* onAddNotificationStart(){
  yield takeLatest(NOTIFICATIONS_ACTION_TYPES.ADD_NOTIFICATION_START, addNotification)
}
export function* onRemoveNotificationStart(){
  yield takeLatest(NOTIFICATIONS_ACTION_TYPES.REMOVE_NOTIFICATION_START, removeNotification)
}
export function* onCreateNotificationDocStart(){
  yield takeLatest(NOTIFICATIONS_ACTION_TYPES.CREATE_NOTIFICATION_DOC_START, createNotificationDoc)
}

export function* notificationsSaga(){
  yield all([
    call(onGetNotificationsStart),
    call(onAddNotificationStart),
    call(onRemoveNotificationStart),
    call(onCreateNotificationDocStart)
  ])
}