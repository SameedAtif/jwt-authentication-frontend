import axios from "axios";
import { createAction } from "redux-actions";

import { SIGN_OUT_USER_SUCCESSFUL } from "../constants/authConstants";
import store from '../store';

const SignOutUserSuccess = createAction(SIGN_OUT_USER_SUCCESSFUL);
const forbiddenStatuses = [401, 423, 409, 406];

const sessionExpired = (err) => {
  if (err.response && forbiddenStatuses.includes(err.response.status)) {
    store.dispatch(SignOutUserSuccess());
    localStorage.removeItem('user_id');
  }
}

const baseService = () => {
  const defaultOptions = {
    baseUrl: `http://localhost:3000/api/v1`,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    config.withCredentials = true;
    return config;
  }, (error) => {
    Promise.reject(error)
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      sessionExpired(error);
      Promise.reject(error);
    }
  );

  return instance;
}

export default baseService();