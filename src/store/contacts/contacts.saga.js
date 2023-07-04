import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { CONTACTS_ACTION_TYPES } from './contacts.types'
import { addContactsFailed, createContactDocFailed, createContactDocSuccess, createContactsFailed, getContactsFailed, getContactsSuccess, getUserMessagesFailed, getUserMessagesSuccess } from './contacts.action'
import { addDynamicListener, createDoc, createDocWithoutDocKey, updateField } from '../../utils/firebase.utils'

export function* getContacts({payload: id}){
  try{
    yield call(addDynamicListener, id, 'CONTACTS', getContactsSuccess)
  }
  catch(err){
    yield put(getContactsFailed(err))
  }
}
export function* addContact({payload: {targetID, targetData, userID, userData}}){
  try{
    const userMessageID = yield call(createDocWithoutDocKey, 'USER_MESSAGES', {})
    const userMessageSettingsID = yield call(createDocWithoutDocKey, 'USER_MESSAGE_SETTINGS', {})
    const date = new Date().getTime()
    const modifiedTargetData = yield {
      contactID: targetData.id,
      name: targetData.name,
      type: targetData.type,
      messageID: userMessageID,
      messageSettingsID: userMessageSettingsID,
      photoUrl: targetData.photoUrl,
      lastMessageTime: date
    }
    const modifiedUserData = yield {
      contactID: userData.id,
      name: userData.name,
      type: userData.type,
      messageID: userMessageID,
      messageSettingsID: userMessageSettingsID,
      photoUrl: userData.photoUrl,
      lastMessageTime: date
    }
    yield call(updateField, userID, 'CONTACTS', targetID, modifiedTargetData)
    yield call(updateField, targetID, 'CONTACTS', userID, modifiedUserData)
  }
  catch(err){
    yield put(addContactsFailed(err))
  }
}
export function* createContactDoc({payload: id}){
  try{
    yield call(createDoc, id, 'CONTACTS', {})
    yield put(createContactDocSuccess())
  }
  catch(err){
    yield put(createContactDocFailed(err))
  }
}
export function* getUserMessages({payload: contacts}){
  try{
    const addListenerToContactMessages = function*(){
      for (const key of Object.keys(contacts)){
        yield call(addDynamicListener, contacts[key].messageID, 'USER_MESSAGES', getUserMessagesSuccess)
      }
    }

    yield addListenerToContactMessages()
  }
  catch(err){
    yield put(getUserMessagesFailed(err))
  }
}

export function* onGetContactsStart(){
  yield takeLatest(CONTACTS_ACTION_TYPES.GET_CONTACTS_START, getContacts)
}
export function* onAddContactStart(){
  yield takeLatest(CONTACTS_ACTION_TYPES.ADD_CONTACTS_START, addContact)
}
export function* onCreateContactDocStart(){
  yield takeLatest(CONTACTS_ACTION_TYPES.CREATE_CONTACTS_DOC_START, createContactDoc)
}
export function* onGetContactsSuccess(){
  yield takeLatest(CONTACTS_ACTION_TYPES.GET_CONTACTS_SUCCESS, getUserMessages)
}

export function* contactsSagas(){
  yield all([
    call(onGetContactsStart),
    call(onAddContactStart),
    call(onCreateContactDocStart),
    call(onGetContactsSuccess)
  ])
}