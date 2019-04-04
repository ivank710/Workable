import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal_container';

import MainPageContainer from './main/main_page_container';
import ExploreContainer from './explore/explore_container';
import UserPageContainer from './userpage/user_page_container';

const App = () => (
  <div>
    <Modal />
      <ProtectedRoute exact path='/user' component={UserPageContainer}/>
      <ProtectedRoute exact path='/explore' component={ExploreContainer}/>
      <AuthRoute exact path="/" component={MainPageContainer} />
  </div>
);

export default App;