import { createAction } from 'redux-actions';

import * as constants from '../constants/userConstants'
import * as userService from '../services/userService'
import { signInUser } from './authActions'

export const GetUserLoading = createAction(constants.GET_USER_LOADING)
export const GetUserSuccess = createAction(constants.GET_USER_SUCCESSFUL)
export const GetUserFailure = createAction(constants.GET_USER_FAILURE)

export const UpdateUserLoading = createAction(constants.UPDATE_USER_LOADING)
export const UpdateUserSuccess = createAction(constants.UPDATE_USER_SUCCESSFUL)
export const UpdateUserFailure = createAction(constants.UPDATE_USER_FAILURE)

export const CreateUserLoading = createAction(constants.CREATE_USER_LOADING)
export const CreateUserSuccess = createAction(constants.CREATE_USER_SUCCESSFUL)
export const CreateUserFailure = createAction(constants.CREATE_USER_FAILURE)

export const getUser = (payload) => {
  return (dispatch) => {
    dispatch(GetUserLoading);
    return userService.getUser(payload).then((res) => {
      dispatch(GetUserSuccess(res.data))
    }).catch(() => dispatch(GetUserFailure))
  }
}

export const updateUser = (payload) => {
  return (dispatch) => {
    dispatch(UpdateUserLoading);
    return userService.updateUser(payload).then((res) => {
      dispatch(UpdateUserSuccess(res.data))
    }).catch(() => dispatch(UpdateUserFailure))
  }
}

export const createUser = (payload) => {
  return (dispatch) => {
    dispatch(CreateUserLoading);
    return userService.createUser(payload).then((res) => {
      dispatch(CreateUserSuccess(res.data));
      dispatch(signInUser({ email: payload.email, password: payload.password }));
    }).catch(() => {
      dispatch(CreateUserFailure)
    })
  }
}