import { createAction } from 'redux-actions'

import * as constants from '../constants/authConstants'
import * as userActions from './userActions'
import * as authService from '../services/authService'

export const SignInUserLoading = createAction(constants.SIGN_IN_USER_LOADING)
export const SignInUserSuccess = createAction(constants.SIGN_IN_USER_SUCCESSFUL)
export const SignInUserFailure = createAction(constants.SIGN_IN_USER_FAILURE)

export const SignOutUserSuccess = createAction(constants.SIGN_OUT_USER_SUCCESSFUL)

export const signInUser = (payload) => {
  return (dispatch) => {
    dispatch(SignInUserLoading);

    return authService.signInUser(payload).then((res) => {
      dispatch(SignInUserSuccess(res.data.body.user_id));
      localStorage.setItem('user_id', res.data.body.user_id);
      dispatch(userActions.getUser(res.data.body.user_id));
    }).catch((err) => {
      dispatch(SignInUserFailure);
    })
  }
}

export const signOutUser = () => {
  return (dispatch) => {
    return authService.signOutUser().then((res) => {
      dispatch(SignOutUserSuccess);
      localStorage.removeItem('user_id');
      window.location.reload()
    })
  }
}
