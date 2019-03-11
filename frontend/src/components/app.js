import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import Explore from './explore/explore';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <ProtectedRoute path='/explore' component={Explore}/>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;