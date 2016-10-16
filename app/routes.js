/**
 * Created by kee on 15/9/25.
 */
import React from 'react';
import {  IndexRoute, Route, Router } from 'react-router';
import App from './Containers/App';
import Login from './Containers/Login';

import AdminLayout from './Containers/Admin/Layout';
import AdminWelcome from './Containers/Admin/Welcome';
import AdminShop from './Containers/Shop';
import Foo from './Containers/Foo';

import NotFound from './containers/NotFound';



import { UserIsAuthenticated,UserIsNotAuthenticated} from './Utils/wrappers'


export default ()=>{
  return (
    <Router>
      <Route path="/">
        <IndexRoute component={UserIsNotAuthenticated(Login)} />
      </Route>
      <Route path="/admin" component={AdminLayout}>
        <IndexRoute component={UserIsAuthenticated(AdminWelcome)} />
        <Route path="shop" component={UserIsAuthenticated(AdminShop)} />
      </Route>
      <Route path="*" component={NotFound} status={404} />
    </Router>
  );
};
