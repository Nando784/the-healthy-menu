import { combineReducers } from "redux";
import dietaryReducer from './dietaryReducer'
import historyReducer from './historyReducer'
import intoleranceReducer from './intoleranceReducer'

const rootReducer = combineReducers({
  historyReducer,
  dietaryReducer,
  intoleranceReducer
})

export default rootReducer