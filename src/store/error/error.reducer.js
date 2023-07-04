import { ERROR_ACTION_TYPES } from "./error.types";

const ERROR_INITIAL_STATE = {
  error: {}
}

export const errorReducer = (
  state = ERROR_INITIAL_STATE,
  action = {}
) => {
  const {type, payload} = action
  switch(type){
    case ERROR_ACTION_TYPES.SET_ERROR:
    case ERROR_ACTION_TYPES.CLEAR_ERROR:
      console.log('LOCAL ERROR PAYLOAD: ', payload)
      return { error: payload }
    default:
      return state
  }
}