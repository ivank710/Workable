import { RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN, RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default function(state = {isAuthenticated: false, user: null}, action) {
  switch(action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_CURRENT_USER: 
      return {isAuthenticated: true, user: action.currentUser};
    case RECEIVE_USER_SIGN_IN:
      return { isAuthenticated: true };
    default:
      return state;
  }
}