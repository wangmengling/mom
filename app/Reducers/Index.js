import { combineReducers } from 'redux'
import todos from './Todos'
import visibilityFilter from './VisibilityFilter'
import appleBusket from './appleBuskReducer'
import login from './Login'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  appleBusket,
  login
})

export default todoApp
