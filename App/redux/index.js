import { combineReducers } from 'redux'
import myCreateStore from './createStore'
import rootSaga from '../sagas'
import {reducer} from './reducers/applicationReducer'
import {conversationReducer} from './reducers/conversationReducer'
import {sessionReducer} from './reducers/sessionReducer'

export const rootReducer = combineReducers({
  reducer,
  conversationReducer,
  sessionReducer
})

export default myCreateStore(rootReducer, rootSaga)
