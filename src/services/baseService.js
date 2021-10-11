import axios from 'axios';
import { createAction } from 'redux-actions';

import store from '../store.js';
import { SIGN_OUT_USER_SUCCESSFUL } from '../constants/authConstants';

const forbiddenStatuses = [401, 423, 409, 406];

export const SignOutSuccess = createAction(SIGN_OUT_USER_SUCCESSFUL);


const checkIfSessionExpired = (err) => {
  if (err.response && forbiddenStatuses.includes(err.response.status)) {
    store.dispatch(SignOutSuccess());
  }
};

const baseService = () => {
  const defaultOptions = {
    baseURL: `http://localhost:3000/api/v1`,
    headers: {
      'Content-Type': 'application/json',
    },
  };

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
      checkIfSessionExpired(err);
      return Promise.reject(err);
    },
  );

  return instance;
};

export default baseService();
