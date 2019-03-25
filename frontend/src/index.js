import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
//will use to parse the user's session token
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import {logout} from './actions/session_actions';
// import {getJobs, getPrice, getJobs2} from './util/api_util';
import {getJobs} from './actions/job_actions';

import {fetchUserJobs} from './actions/user_job_actions'

window.getJobs = getJobs;
window.fetchUserJobs = fetchUserJobs;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  

  //if a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {

    //set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    //decode the token to obtain the user's info
    const decodedUser = jwt_decode(localStorage.jwtToken);

    //create a preconfigured state we can immediately add to our store
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    //if the user's token has expired
    if (decodedUser.exp < currentTime) {
      //logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = '/login';
    } 
  } else {
    //if this is the first time user, start with an empty store
    store = configureStore({});
  }

  //render our root component and pass in the store as a prop
  const root = document.getElementById('root');

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;

  ReactDOM.render(<Root store={store} />, root);
});