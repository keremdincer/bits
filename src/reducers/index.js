import { combineReducers } from 'redux'
import notifications from './notifications'
import tests from './tests'

export default combineReducers({
  notifications,
  tests
})
