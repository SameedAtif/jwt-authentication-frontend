import { createAction } from 'redux-actions'

import * as constants from '../constants/authConstants'
import * as userActions from './userActions'
import * as authService from '../services/authService'

export const SignInUserLoading = createAction(constants.SIGN_IN_USER_LOADING)
export const SignInUserSuccess = createAction(constants.SIGN_IN_USER_SUCCESSFUL)
export const SignInUserFailure = createAction(constants.SIGN_IN_USER_FAILURE)

export const SignOutUserSuccess = createAction(constants.SIGN_OUT_USER_SUCCESSFUL)

export const signInUser = (payload) => {
  return async (dispatch) => {
    dispatch(SignInUserLoading);

    return authService.signInUser(payload).then((res) => {
      dispatch(SignInUserSuccess(res.data.id));
      userActions.getUser(res);
    }).catch((err) => {
      dispatch(SignInUserFailure);
    })
  }
}

export const signOutUser = (payload) => {
  return async (dispatch) => {
    return authService.signOutUser(payload).then((res) => {      
      dispatch(SignOutUserSuccess);
      userActions.getUser(res);
    })
  }
}