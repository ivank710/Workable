import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

//when user signs in
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

//to redirect the user to the login page upon signup
export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
});

//dispatch this to show auth errors 
export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

//when user is loggedout, we will dispatch this action to set isAuthenticated to false
export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

//upon signup, dispatch the appropriate action depending on the response we get from the backend
export const signup = user => dispatch => (
  APIUtil.signup(user).then(() => (
    dispatch(receiveUserSignIn())
  ), err => (dispatch(receiveErrors(err.response.data))
  ))
);

//upon login, set the session token and dispatch the currUser
export const login = user => dispatch => (
  APIUtil.login(user).then(res => {
    const {token} = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded));
  })
  .catch(err => {
    dispatch(receiveErrors(err.response.data));
  })
);

export const logout = () => dispatch => {
  //remove the token from local storage
  localStorage.removeItem('jwtToken');
  //remove the token from the axios header
  APIUtil.setAuthToken(false);

  dispatch(logoutUser());
};