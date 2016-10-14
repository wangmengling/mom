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

import NotFound from './containers/NotFound';



import { UserIsAuthenticated , UserIsAdmin ,VisibleOnlyAdmin} from './Utils/wrappers'
// import { UserAuthWrapper } from 'redux-auth-wrapper'
// import { routerActions } from 'react-router-redux'
// const UserIsAuthenticated = UserAuthWrapper({
//   authSelector: state => state.user,
//   wrapperDisplayName: 'VisibleOnlyAdmin',
//   // predicate: user => user.isAdmin,
//   failureRedirectPath: '/',
//   FailureComponent: null
// })

export default ()=>{
  return (
    <Router>
      <Route path="/" component={App}>
        <Route path="/login" component={Login}/>
      </Route>
      <Route path="/admin" component={VisibleOnlyAdmin(App)}>
        <IndexRoute component={VisibleOnlyAdmin(AdminWelcome)} />
        <Route path="shop" component={VisibleOnlyAdmin(AdminShop)} />
      </Route>
      <Route path="*" component={NotFound} status={404} />
    </Router>
  );
};
