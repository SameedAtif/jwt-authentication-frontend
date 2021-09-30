import * as constatns from '../constants/userConstants';

const initialState = { user: {}, loading: false }

const userReducer = (state = initialState, action) => {
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
        user: {}
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
        user: {}
      }
    default:
      return state;
  }
}

export default userReducer;
