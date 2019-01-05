import { combineReducers } from 'redux'
import todos from './todos/reducer'
import filter from './filter/reducer'

export default combineReducers({
	todos,
  filter,
})