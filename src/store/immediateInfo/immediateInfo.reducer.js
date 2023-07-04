import { IMMEDIATEINFO_ACTION_TYPES } from "./immediateInfo.types";

const IMMEDIATEINFO_INITIAL_STATE = {
  isEmailAvailable: null,
  loadingImmedEmails: false,
  addingImmedEmails: false,
  errorImmedEmails: null,
  isRoomDispNameAvailable: null,
  loadingImmedRoomDispNames: false,
  addingImmedRoomDispNames: false,
  errorImmedRoomDispNames: null,
  isUserDispNameAvailable: null,
  loadingImmedUserDispNames: false,
  addingImmedUserDispNames: false,
  errorImmedUserDispNames: null,
  immedUserInfos: [],
  loadingImmedUserInfos: false,
  errorImmedUserInfos: null,
  immedRoomINfos: [],
  loadingImmedRoomInfos: false,
  addingImmedRoomInfos: false,
  errorImmedRoomInfos: null
}

export const immediateInfoReducer = (
  state = IMMEDIATEINFO_INITIAL_STATE,
  action = {}
) => {
  const {type, payload} = action
  switch(type){
    case IMMEDIATEINFO_ACTION_TYPES.ADD_EMAILS_START:
      return { ...state, addingImmedEmails: true }
    case IMMEDIATEINFO_ACTION_TYPES.CHECK_EMAILS_START:
      return { ...state, loadingImmedEmails: true }
    case IMMEDIATEINFO_ACTION_TYPES.ADD_USER_DISP_NAMES_START:
      return { ...state, addingImmedUserDispNames: true }
    case IMMEDIATEINFO_ACTION_TYPES.CHECK_USER_DISP_NAMES_START:
      return { ...state, loadingImmedUserDispNames: true }
    case IMMEDIATEINFO_ACTION_TYPES.ADD_USER_INFOS_START:
      return { ...state, loadingImmedUserInfos: true }
    case IMMEDIATEINFO_ACTION_TYPES.GET_USER_INFOS_START:
      return { ...state, loadingImmedUserInfos: true }

    case IMMEDIATEINFO_ACTION_TYPES.ADD_EMAILS_SUCCESS:
      return { ...state, addingImmedEmails: false }
    case IMMEDIATEINFO_ACTION_TYPES.CHECK_EMAILS_SUCCESS:
      return { ...state, loadingImmedEmails: false, isEmailAvailable: payload }
    case IMMEDIATEINFO_ACTION_TYPES.ADD_USER_DISP_NAMES_SUCCESS:
      return { ...state, addingImmedUserDispNames: false }
    case IMMEDIATEINFO_ACTION_TYPES.CHECK_USER_DISP_NAMES_SUCCESS:
      return { ...state, loadingImmedUserDispNames: false, isUserDispNameAvailable: payload }
    case IMMEDIATEINFO_ACTION_TYPES.ADD_USER_INFOS_SUCCESS:
      return { ...state, loadingImmedUserInfos: false }
    case IMMEDIATEINFO_ACTION_TYPES.GET_USER_INFOS_SUCCESS:
      return { ...state, loadingImmedUserInfos: false, immedUserInfos: payload }

    case IMMEDIATEINFO_ACTION_TYPES.ADD_EMAILS_FAILED:
      return { ...state, addingImmedEmails: false, errorImmedEmails: payload }
    case IMMEDIATEINFO_ACTION_TYPES.CHECK_EMAILS_FAILED:
      return { ...state, loadingImmedEmails: false, isEmailAvailable: null, errorImmedEmails: payload }
    case IMMEDIATEINFO_ACTION_TYPES.ADD_USER_DISP_NAMES_FAILED:
      return { ...state, addingImmedUserDispNames: false, errorImmedUserDispNames: payload }
    case IMMEDIATEINFO_ACTION_TYPES.CHECK_USER_DISP_NAMES_FAILED:
      return { ...state, loadingImmedUserDispNames: false, isUserDispNameAvailable: null, errorImmedUserDispNames: payload }
    case IMMEDIATEINFO_ACTION_TYPES.ADD_USER_INFOS_FAILED:
      return { ...state, loadingImmedUserInfos: false, errorImmedUserInfos: payload}
    case IMMEDIATEINFO_ACTION_TYPES.GET_USER_INFOS_FAILED:
      return { ...state, loadingImmedUserInfos: false, errorImmedUserInfos: payload}

    default:
      return state
  }
}