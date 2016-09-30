import { combineReducers } from 'redux'
import todos from './Todos'
import visibilityFilter from './VisibilityFilter'
import appleBusket from './appleBuskReducer'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  appleBusket
})

export default todoApp
