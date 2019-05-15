import { combineReducers } from 'redux'
import myCreateStore from './createStore'
import rootSaga from '../sagas'
import {reducer} from './reducers/applicationReducer'
import {conversationReducer} from './reducers/conversationReducer'
import {userReducer} from './reducers/userReducer'

export const rootReducer = combineReducers({
  reducer,
  conversationReducer,
  userReducer
})

export default myCreateStore(rootReducer, rootSaga)
