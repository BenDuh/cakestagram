import { combineReducers } from 'redux'
import myCreateStore from './createStore'
import rootSaga from '../sagas'
import {reducer} from './reducers/applicationReducer'
import {conversationReducer} from './reducers/conversationReducer'
import {sessionReducer} from './reducers/sessionReducer'
import {signupReducer} from './reducers/signupReducer'

export const rootReducer = combineReducers({
  reducer,
  conversationReducer,
  sessionReducer,
  signupReducer
  
})

export default myCreateStore(rootReducer, rootSaga)
