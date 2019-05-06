import { combineReducers } from 'redux'
import posts from './PostReducer'
import todos from './AxiosReducer'

export default combineReducers({
  posts, 
  todos
})