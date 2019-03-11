import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal_container';

import MainPageContainer from './main/main_page_container';
import Explore from './explore/explore';
import UserPage from './userpage/user_page';

const App = () => (
  <div>
    <Modal />
    {/* <NavBarContainer /> */}
    {/* <Switch> */}
      <ProtectedRoute exact path='/user' component={UserPage}/>
      <ProtectedRoute exact path='/explore' component={Explore}/>
      <AuthRoute exact path="/" component={MainPageContainer} />
     
    {/* </Switch> */}
  </div>
);

export default App;