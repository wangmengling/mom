import { combineReducers } from 'redux'
import todos from './Todos'
import visibilityFilter from './VisibilityFilter'
import appleBusket from './appleBuskReducer'
import user from './user'
import shop from './Shop'
import udpReducer from './udpReducer'

// const todoApp = combineReducers({
//   todos,
//   visibilityFilter,
//   appleBusket,
//   login,
//   // shop
// })

// export default todoApp
module.exports = {
  todos,
  visibilityFilter,
  appleBusket,
  user,
  udpReducer
 }
