import { createAction } from "../../utils/reducer.utils";
import { ERROR_ACTION_TYPES } from "./error.types";

export const setError = (errorObj) => 
  createAction(ERROR_ACTION_TYPES.SET_ERROR, errorObj)

export const clearError = () =>
  createAction(ERROR_ACTION_TYPES, null)