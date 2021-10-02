import { combineReducers } from "redux";

import authReducer from "./authReducer";
import userReducer from "./userReducer";

import { SIGN_OUT_USER_SUCCESSFUL } from "../constants/authConstants";

const appReducer = combineReducers({
  authReducer,
  userReducer
});

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT_USER_SUCCESSFUL) {
    window.location.href = '/';
  }
  return appReducer(state, action)
}

export default rootReducer