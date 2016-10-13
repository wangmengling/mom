import reduxDevTools from  'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import { render } from 'react-dom'
import { createStore ,applyMiddleware, combineReducers,compose} from 'redux'
import { Provider } from 'react-redux'
import {  Router, Route, Redirect, Link, browserHistory,IndexRoute } from 'react-router'
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'



import { UserAuthWrapper } from 'redux-auth-wrapper'


import reducers from './Reducers'
import routes from './routes'

let middleware = [thunk];

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})
//-------------------------------------------------------------------------------------compose START
// 生产环境中，我们希望只使用 middleware。
// 而在开发环境中，我们还希望使用一些 redux-devtools 提供的一些 store 增强器。
// UglifyJS 会在构建过程中把一些不会执行的死代码去除掉。






// if (process.env.NODE_ENV === 'production') {
 const finalCreateStore = applyMiddleware(...middleware)(createStore);

// } else {
  // const DevTools = reduxDevTools(
  //   <DockMonitor toggleVisibilityKey="ctrl-h"
  //               changePositionKey="ctrl-q">
  //     <LogMonitor theme="tomorrow" />
  //   </DockMonitor>
  // )
  // finalCreateStore = compose(
  //   applyMiddleware(...middleware),
  //   DevTools.instrument(),
  //   createStore
  // );
// }
// 不使用 compose 来写是这样子：
  
  // finalCreateStore =
  //   applyMiddleware(middleware)(
  //     devTools()(
  //       persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))(
  //         createStore
  //       )
  //     )
  //   );

const store = finalCreateStore(reducers)
//------------------------------------------------------------------------------------END

// const store = createStore(reducer)

const history = syncHistoryWithStore(browserHistory, createStore(reducer))

const component = (
  <Router  history={history}>
    {routes(store)}
  </Router>
);

render(
  <Provider store={store}>
    <div>
      {component}
    </div>
  </Provider>,
  document.getElementById('root')
)
