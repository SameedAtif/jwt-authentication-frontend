import * as constatns from '../constants/userConstants';

const initialState = { user: null, loading: false }

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case constatns.SIGN_IN_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case constatns.SIGN_IN_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.payload
      };
    case constatns.SIGN_IN_USER_FAILURE:
      return {
        ...state,
        user: null
      }
    case constatns.SIGN_OU_USER_SUCCESSFUL:
      return {
        ...state,
        user: null,
        loading: false
      }
    default:
      return state;
  }
}

export default authReducer;
