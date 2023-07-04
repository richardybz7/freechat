import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { IMMEDIATEINFO_ACTION_TYPES } from './immediateInfo.types'
import { getDocument, updateField } from '../../utils/firebase.utils'
import { addEmailFailed, addEmailSuccess, addUserDispNameFailed, addUserDispNameSuccess, addUserInfoFailed, addUserInfoSuccess, checkEmailFailed, checkEmailSuccess, checkUserDispNameFailed, checkUserDispNameSuccess, getUserInfoFailed, getUserInfoSuccess } from './immediateInfo.action'

export function* checkEmail({payload: {emailInput}}){
  try{
    const data = yield call(getDocument, 'IMMED_EMAILS', 'IMMEDIATE_INFO')
    yield put(checkEmailSuccess(data, emailInput))
  }
  catch(err){
    yield put(checkEmailFailed(err))
  }
}
export function* checkUserDispName({payload: {dispNameInput}}){
  try{
    const data = yield call(getDocument, 'IMMED_USER_DISP_NAMES', 'IMMEDIATE_INFO')
    yield put(checkUserDispNameSuccess(data, dispNameInput))
  }
  catch(err){
    yield put(checkUserDispNameFailed(err))
  }
}
export function* addEmail({payload: {id, email}}){
  try{
    yield updateField('IMMED_EMAILS', 'IMMEDIATE_INFO', id, email)
    yield put(addEmailSuccess())
  }
  catch(err){
    yield put(addEmailFailed(err))
  }
}
export function* addUserDispName({payload: {id, userDispName}}){
  try{
    yield updateField('IMMED_USER_DISP_NAMES', 'IMMEDIATE_INFO', id, userDispName)
    yield put(addUserDispNameSuccess())
  }
  catch(err){
    yield put(addUserDispNameFailed(err))
  }
}
export function* addUserInfo({payload: {id, userObject}}){
  try{
    yield updateField('IMMED_USER_INFO', 'IMMEDIATE_INFO', id, [userObject])
    yield put(addUserInfoSuccess())
  }
  catch(err){
    yield put(addUserInfoFailed(err))
  }
}
export function* getUserInfo({payload: {userDispName, contacts, pendingContacts, userID}}){
  try{
    const userInfo = yield call(getDocument,'IMMED_USER_INFO','IMMEDIATE_INFO') 
    yield put(getUserInfoSuccess(userInfo, userDispName, contacts, pendingContacts, userID))
  }
  catch(err){
    yield put(getUserInfoFailed(err))
  }
}


export function* onCheckEmailStart(){
  yield takeLatest(IMMEDIATEINFO_ACTION_TYPES.CHECK_EMAILS_START, checkEmail)
}
export function* onCheckUserDispNameStart(){
  yield takeLatest(IMMEDIATEINFO_ACTION_TYPES.CHECK_USER_DISP_NAMES_START, checkUserDispName)
}
export function* onAddEmailStart(){
  yield takeLatest(IMMEDIATEINFO_ACTION_TYPES.ADD_EMAILS_START, addEmail)
}
export function* onAddUserDispNameStart(){
  yield takeLatest(IMMEDIATEINFO_ACTION_TYPES.ADD_USER_DISP_NAMES_START, addUserDispName)
}
export function* onAddUserInfoStart(){
  yield takeLatest(IMMEDIATEINFO_ACTION_TYPES.ADD_USER_INFOS_START, addUserInfo)
}
export function* onGetUserInfoStart(){
  yield takeLatest(IMMEDIATEINFO_ACTION_TYPES.GET_USER_INFOS_START, getUserInfo)
}


export function* immediateInfoSagas(){
  yield all([
    call(onCheckEmailStart),
    call(onCheckUserDispNameStart),
    call(onAddEmailStart),
    call(onAddUserDispNameStart),
    call(onAddUserInfoStart),
    call(onGetUserInfoStart)
  ])
}