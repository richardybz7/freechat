import { createAction } from "../../utils/reducer.utils";
import { IMMEDIATEINFO_ACTION_TYPES } from "./immediateInfo.types";

const checkInputExist = (dataObject, input) => {
  const dataArray = Object.values(dataObject)
  const bool = dataArray.includes(input)
  return bool
}
const filterByName = (dataObject, fieldValue, contacts, pendingContacts, userID) => {
  let objectArray = []
  Object.keys(dataObject).forEach(key => {
    if(key !== userID){
      const objectValues = Object.values(dataObject[key])
      objectValues.forEach(value => {
        if(value.name.includes(fieldValue)){//check if there's a match
          if(Object.keys(contacts).length > 0){
            Object.keys(contacts).forEach(key => {
              if(contacts[key].name.includes(fieldValue)){
                Object.assign(value,{userStatus: 'isContact'})
              }
            })
          } 
          //check if it's a pending contact
          else if(pendingContacts && pendingContacts.includes(key)){
            Object.assign(value,{userStatus: 'isPending'})
          }
  
          objectArray.push(value)
        }
      })
    }
  })
  return objectArray
}

export const checkEmailStart = (emailInput) => 
  createAction(IMMEDIATEINFO_ACTION_TYPES.CHECK_EMAILS_START, emailInput)

export const checkEmailSuccess = (dataObject, emailInput) => {
  const boolResult = checkInputExist(dataObject, emailInput)
  return createAction(IMMEDIATEINFO_ACTION_TYPES.CHECK_EMAILS_SUCCESS, !boolResult)
}
export const checkEmailFailed = (err) =>
  createAction(IMMEDIATEINFO_ACTION_TYPES.CHECK_EMAILS_FAILED, err)


export const checkUserDispNameStart = (dispNameInput) => 
  createAction(IMMEDIATEINFO_ACTION_TYPES.CHECK_USER_DISP_NAMES_START, dispNameInput)
export const checkUserDispNameSuccess = (dataObject, dispNameInput) => {
  const boolResult = checkInputExist(dataObject, dispNameInput)
  return createAction(IMMEDIATEINFO_ACTION_TYPES.CHECK_USER_DISP_NAMES_SUCCESS, !boolResult)
}
export const checkUserDispNameFailed = (err) =>
  createAction(IMMEDIATEINFO_ACTION_TYPES.CHECK_USER_DISP_NAMES_FAILED, err)


export const addEmailStart = (id, email) => 
  createAction(IMMEDIATEINFO_ACTION_TYPES.ADD_EMAILS_START, {id, email})
export const addEmailSuccess = () =>
  createAction(IMMEDIATEINFO_ACTION_TYPES.ADD_EMAILS_SUCCESS)
export const addEmailFailed = (err) =>
  createAction(IMMEDIATEINFO_ACTION_TYPES.ADD_EMAILS_FAILED, err)


export const addUserDispNameStart = (id, userDispName) => 
  createAction(IMMEDIATEINFO_ACTION_TYPES.ADD_USER_DISP_NAMES_START, {id, userDispName})
export const addUserDispNameSuccess = () =>
  createAction(IMMEDIATEINFO_ACTION_TYPES.ADD_USER_DISP_NAMES_SUCCESS)
export const addUserDispNameFailed = (err) =>
  createAction(IMMEDIATEINFO_ACTION_TYPES.ADD_USER_DISP_NAMES_FAILED, err)


export const addUserInfoStart = (id, userObject) =>
  createAction(IMMEDIATEINFO_ACTION_TYPES.ADD_USER_INFOS_START, {id, userObject})
export const addUserInfoSuccess = () =>
  createAction(IMMEDIATEINFO_ACTION_TYPES.ADD_USER_INFOS_SUCCESS)
export const addUserInfoFailed = (err) =>
  createAction(IMMEDIATEINFO_ACTION_TYPES.ADD_USER_INFOS_FAILED, err)


export const getUserInfoStart = (userDispName, contacts, pendingContacts, userID) => 
  createAction(IMMEDIATEINFO_ACTION_TYPES.GET_USER_INFOS_START, {userDispName, contacts, pendingContacts, userID})
export const getUserInfoSuccess = (userInfo, userDispName, contacts, pendingContacts, userID) => {
  const filteredItems = filterByName(userInfo, userDispName, contacts, pendingContacts, userID)
  return createAction(IMMEDIATEINFO_ACTION_TYPES.GET_USER_INFOS_SUCCESS, filteredItems)
}
export const getUserInfoFailed = (err) =>
  createAction(IMMEDIATEINFO_ACTION_TYPES.GET_USER_INFOS_FAILED, err)
