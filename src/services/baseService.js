import axios from 'axios';
import { createAction } from 'redux-actions';

import * as userActions from '../actions/userActions'

import store from '../store.js';
import { SIGN_OUT_USER_SUCCESSFUL, SIGN_IN_USER_SUCCESSFUL } from '../constants/authConstants';

const baseURL = `http://localhost:3000/api/v1`;
const defaultOptions = {
  withCredentials: true,
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const forbiddenStatuses = [401, 423, 409, 406];

export const SignOutSuccess = createAction(SIGN_OUT_USER_SUCCESSFUL);
export const SignInUserSuccess = createAction(SIGN_IN_USER_SUCCESSFUL)


const refreshToken = async () => {
  const customFetch = axios.create(defaultOptions);
  return await customFetch.put("/session")
}
const checkIfSessionExpired = (err) => {
  if (err.response && forbiddenStatuses.includes(err.response.status)) {
    if (err.response.status === 409) {
      return refreshToken();
    } else {
      store.dispatch(SignOutSuccess());
      return false;
    }
  }
};

const baseService = () => {
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    Promise.reject(error);
  });

  instance.interceptors.response.use(
    (response) => response,
    (err) => {
      localStorage.removeItem('user_id');
      const sessionExpired = checkIfSessionExpired(err);
      if(sessionExpired) {
        sessionExpired.then((res) => {
          store.dispatch(SignInUserSuccess(res.data.body.user_id));
          localStorage.setItem('user_id', res.data.body.user_id);
          store.dispatch(userActions.getUser(res.data.body.user_id));
        })
      } else {
        store.dispatch(SignOutSuccess())
      }
    },
  );

  return instance;
};

export default baseService();
