import * as constants from '../constants/authConstants';

const initialState = { user: null, loading: false }

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.SIGN_IN_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case constants.SIGN_IN_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.payload
      };
    case constants.SIGN_IN_USER_FAILURE:
      return {
        ...state,
        user: null
      }
    case constants.SIGN_OUT_USER_SUCCESSFUL:
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
