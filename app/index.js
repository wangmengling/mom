import React from 'react'
import { render } from 'react-dom'
import { createStore ,applyMiddleware, combineReducers,compose} from 'redux'
import { Provider } from 'react-redux'
import {  Router, Route, Redirect, Link, browserHistory,IndexRoute } from 'react-router'
import thunkMiddleware from 'redux-thunk';
import { syncHistoryWithStore, routerReducer , routerMiddleware} from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper' // user auth


//-------------------------------------------------reducers start
import reducers from './Reducers'
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))
//-------------------------------------------------reducers end

//-------------------------------------------compose start
const routingMiddleware = routerMiddleware(browserHistory)
//如果是 Dev debug 模式
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  //你要使用的中间件，放在前面
  applyMiddleware(thunkMiddleware,routingMiddleware)
  
)
//pro 模式
// const enhancer = compose(
//   //你要使用的中间件，放在前面
//   applyMiddleware(thunkMiddleware,routingMiddleware)
// )
//-------------------------------------------compose --end


//------------------------------------------createStore start
const store = createStore(
  reducer,
  enhancer
)
const history = syncHistoryWithStore(browserHistory, store)
//------------------------------------------createStore --end

//------------------------------------------routers start
import routes from './routes'
const component = (
  <Router  history={history}>
    {routes(store)}
  </Router>
);
//------------------------------------------routers --end


//-----------render-------------
render(
  <Provider store={store}>
    <div>
      {component}
    </div>
  </Provider>,
  document.getElementById('root')
)
