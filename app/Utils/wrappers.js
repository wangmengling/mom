import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

import Loading from '../containers/Loading';

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.data,
  authenticatingSelector: state => state.user.isLoading,
  LoadingComponent: Loading,
  failureRedirectPath: '/',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
})
// export const UserIsAdmin = UserAuthWrapper({
//   authSelector: state => state.user.data,
//   redirectAction: routerActions.replace,
//   failureRedirectPath: '/',
//   wrapperDisplayName: 'UserIsAdmin',
//   predicate: user => user.isAdmin,
//   allowRedirectBack: false
// })
export const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  // Want to redirect the user when they are done loading and authenticated
  predicate: user => user.data === null && user.isLoading === false,
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/admin',
  allowRedirectBack: false
})

// export const VisibleOnlyAdmin = UserAuthWrapper({
//   authSelector: state => state.user,
//   wrapperDisplayName: 'VisibleOnlyAdmin',
//   predicate: user => user.isAdmin,
//   failureRedirectPath: '/',
//   FailureComponent: null
// })
