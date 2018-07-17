// reducers/index.js

import { combineReducers } from 'redux'
import film from './filmReducer'
import bookmark from './bookMarkReducer'

const rootReducer = combineReducers({
  film,
  bookmark
})

export default rootReducer
