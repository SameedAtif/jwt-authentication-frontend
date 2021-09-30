import * as constatns from '../constants/userConstants';

const initialState = { user: null, loading: false }

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case constatns.GET_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case constatns.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case constatns.GET_USER_FAILURE:
      return {
        ...state,
        user: null
      }
    case constatns.UPDATE_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case constatns.UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case constatns.UPDATE_USER_FAILURE:
      return {
        ...state,
        user: null
      }
    default:
      return state;
  }
}

export default authReducer;
