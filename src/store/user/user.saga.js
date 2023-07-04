import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { USER_ACTION_TYPES } from './user.types'
import { addDynamicListener, checkDocExist, createDoc, getCurrentUser, getDocument, signInUserWithEmailAndPassword, signOutUserSession, signUpUserWithEmailAndPassword, updateArrayElements, updateField } from '../../utils/firebase.utils'
import { addUserContactFailed, checkUserSessionFailed, checkUserSessionSuccess, createUserFailed, createUserSuccess, getListenerData, getUserFailed, getUserStart, getUserSuccess, loginFailed, loginStart, loginSuccess, signOutUserFailed, signOutUserSuccess, updateUserIdsFailed, updateUserIdsSuccess } from './user.action'
import { OpenModal_SignInError, OpenModal_SignInSignUpError, OpenModal_SignUpError } from '../display/display.action'
import { addEmailStart, addUserDispNameStart, addUserInfoStart } from '../immediateInfo/immediateInfo.action'
import { createContactDocStart, getContactsStart, getContactsSuccess } from '../contacts/contacts.action'
import { addNotificationDocStart, addNotificationStart, createNotificationDocStart, getNotificationsStart, getNotificationsSuccess } from '../notifications/notifications.action'
import { getPendingContacts } from '../pendingContacts/pendingContacts.action'

export function* createUser({payload: {email, password, userDispName, selfDesc}}){
  try{
    const {user} = yield call(signUpUserWithEmailAndPassword, email, password)
    const initUserData = yield {
      id: user.uid,
      email: user.email,
      name: userDispName,
      photoUrl: null,
      coverPhotoUrl: null,
      selfDesc: selfDesc,
      pendingContacts: []
    }
    const initUserInfo = yield {
      id: user.uid,
      name: userDispName,
      photoUrl: null,
      selfDesc: selfDesc,
      coverPhotoUrl: null
    }
    yield call(createDoc, user.uid, 'USERS', initUserData)
    yield put(createUserSuccess())
    yield put(createContactDocStart(user.uid))
    yield put(createNotificationDocStart(user.uid))
    yield put(addEmailStart(user.uid, user.email))
    yield put(addUserDispNameStart(user.uid, userDispName))
    yield put(addUserInfoStart(user.uid, initUserInfo))
    yield put(loginStart(user.email, password))
  }
  catch(err){
    let errorMessage
    if(err && err.hasOwnProperty('code')){
      errorMessage = err.code.replace('auth/', '')
      errorMessage = errorMessage.replace(/-/g, ' ')
      errorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1) + '!'
    }
    yield put(createUserFailed(errorMessage))
    yield put(OpenModal_SignUpError(true))
  }
}
export function* getUser({payload: id}){
  try{
    const user = yield call(getDocument, id, 'USERS')
    yield put(getUserSuccess(user))
    yield put(getPendingContacts(user.pendingContacts))
    yield put(getNotificationsStart(id))
    yield put(getContactsStart(id))
  }
  catch(err){
    yield put(getUserFailed(err))
  }
}
export function* login({payload: {email, password}}){
  try{ 
    const {user} = yield call(signInUserWithEmailAndPassword, email, password)
    yield put(loginSuccess())
    yield put(getUserStart(user.uid))
  }
  catch(err){
    let errorMessage
    if(err && err.hasOwnProperty('code')){
      errorMessage = err.code.replace('auth/', '')
      errorMessage = errorMessage.replace(/-/g, ' ')
      errorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1) + '!'
    }
    yield put(loginFailed(errorMessage))
    yield put(OpenModal_SignInError(true))
  }
}
export function* checkUserSession(){
  try{
    const userFirebaseData = yield call(getCurrentUser)
    if(userFirebaseData){
      const {uid} = userFirebaseData
      yield put(getUserStart(uid))
    }
    else
      yield put(checkUserSessionSuccess())
  }
  catch(err){
    yield put(checkUserSessionFailed(err))
  }
}
export function* signOutUser(){
  try{
    yield call(signOutUserSession)
    yield put(signOutUserSuccess())
  }
  catch(err){
    yield put(signOutUserFailed(err))
  }
}
export function* addUserContact({payload: {contactID, id}}){
  try{
    yield call(updateArrayElements, id, 'USERS', 'contacts', contactID)
  }
  catch(err){
    yield put(addUserContactFailed(err))
  }
}

export function* onCreateUserStart(){
  yield takeLatest(USER_ACTION_TYPES.CREATE_USER_START, createUser)
}
export function* onGetUserStart(){
  yield takeLatest(USER_ACTION_TYPES.GET_USER_START, getUser)
}
export function* onLoginStart(){
  yield takeLatest(USER_ACTION_TYPES.LOGIN_USER_START, login)
}
export function* onCheckUserSessionStart(){
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION_START, checkUserSession)
}
export function* onSignOutUserStart(){
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_USER_START, signOutUser)
}
export function* onAddUserContactStart(){
  yield takeLatest(USER_ACTION_TYPES.ADD_USER_CONTACT_START, addUserContact)
}

export function* userSagas(){
  yield all([
    call(onCreateUserStart),
    call(onGetUserStart),
    call(onLoginStart),
    call(onCheckUserSessionStart),
    call(onSignOutUserStart),
    call(onAddUserContactStart)
  ])
}