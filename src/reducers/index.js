// reducers/index.js

import { combineReducers } from 'redux'
import film from './filmReducer'

const rootReducer = combineReducers({
  film
})

export default rootReducer
