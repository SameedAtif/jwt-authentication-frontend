import * as constants from '../constants/userConstants';

const initialState = { user: {}, loading: false }

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.GET_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case constants.GET_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.payload
      };
    case constants.GET_USER_FAILURE:
      return {
        ...state,
        user: {}
      }
    case constants.UPDATE_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case constants.UPDATE_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.payload
      };
    case constants.UPDATE_USER_FAILURE:
      return {
        ...state,
        user: {}
      }
    case constants.CREATE_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case constants.CREATE_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.payload
      };
    case constants.CREATE_USER_FAILURE:
      return {
        ...state,
        user: {}
      }
    
    default:
      return state;
  }
}

export default userReducer;
