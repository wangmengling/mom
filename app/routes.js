/**
 * Created by kee on 15/9/25.
 */
import React from 'react';
import {  Route, IndexRoute  } from 'react-router';
import App from './Containers/App';
import Login from './Containers/Login';

export default ()=>{
  return (
      <Route path="/" component={Login}>
        <Route path="/login" component={Login}/>
      </Route>
  );
};
