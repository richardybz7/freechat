import { createAction } from "../../utils/reducer.utils";
import { store } from "../store";
import { CONTACTS_ACTION_TYPES } from "./contacts.types";

const ObjectToArray = (object) => {
  let arr = []
  Object.keys(object).forEach(key => {
    const value = object[key]
    arr.push(value)
  })
  return arr
}
let collectedMessages = {}
let messageIDs = []
const getMessagesIds = (userMessages) => {
  Object.keys(userMessages).forEach(key => {
    const val = userMessages[key]
    if(!(messageIDs.includes(val.messageID)))
      messageIDs.push(val.messageID)
  })
  return messageIDs
}
const collectMessages = (userMessages) => {
  Object.keys(userMessages).forEach(key => {
    const val = userMessages[key]
    if(!(messageIDs.includes(val.messageID))){
      messageIDs.push(val.messageID)
      Object.assign(collectedMessages, {[val.messageID]: {[key]: val}})
    }
    else if(messageIDs.includes(val.messageID)){
      //find similar
      Object.keys(collectedMessages).forEach(messageIDKey => {
        const val2 = collectedMessages[messageIDKey]
        const val3 = Object.values(val2)
        val2[val] = val3
        //console.log(val2)
        // console.log('OHOY: ', messageIDKey)
        // console.log('OHOY?: ', val2)
        // console.log('OHOY??: ', val3)
        //add data
        // if(key2 === key){

        // }
      })
    }
  })

  //Object.assign(collectedMessages, userMessages)
  const messageIds = getMessagesIds(collectedMessages)
  //console.log('GOLDEN HOUR: ', messageIds)
  console.log('HALA DESU ', collectedMessages)
  return collectedMessages
}

export const getContactsStart = (id) => 
  createAction(CONTACTS_ACTION_TYPES.GET_CONTACTS_START, id)
export const getContactsSuccess = (userContacts) => {
  const userContactsArr = ObjectToArray(userContacts)
  return createAction(CONTACTS_ACTION_TYPES.GET_CONTACTS_SUCCESS, userContactsArr)
}
export const getContactsFailed = (err) => 
  createAction(CONTACTS_ACTION_TYPES.GET_CONTACTS_FAILED, err)

export const addContactsStart = (targetID, targetData, userID, userData) => 
  createAction(CONTACTS_ACTION_TYPES.ADD_CONTACTS_START, {targetID, targetData, userID, userData})
export const addContactsSuccess = () => 
  createAction(CONTACTS_ACTION_TYPES.ADD_CONTACTS_SUCCESS)
export const addContactsFailed = (err) => 
  createAction(CONTACTS_ACTION_TYPES.ADD_CONTACTS_FAILED, err)

export const createContactDocStart = (id) => 
  createAction(CONTACTS_ACTION_TYPES.CREATE_CONTACTS_DOC_START, id)
export const createContactDocSuccess = () => 
  createAction(CONTACTS_ACTION_TYPES.CREATE_CONTACTS_DOC_SUCCESS)
export const createContactDocFailed = (err) => 
  createAction(CONTACTS_ACTION_TYPES.CREATE_CONTACTS_DOC_FAILED, err)

export const getUserMessagesStart = (contacts) => 
  createAction(CONTACTS_ACTION_TYPES.GET_USER_MESSAGES_START, contacts)
export const getUserMessagesSuccess = (userMessages) => {
  const messages = collectMessages(userMessages)
  return createAction(CONTACTS_ACTION_TYPES.GET_USER_MESSAGES_SUCCESS, messages)
}
export const getUserMessagesFailed = (err) => 
  createAction(CONTACTS_ACTION_TYPES.GET_USER_MESSAGES_FAILED, err)