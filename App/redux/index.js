import { combineReducers } from 'redux'
import myCreateStore from './createStore'
import rootSaga from '../sagas'
import { reducer } from './reducers/applicationReducer'
import { homeReducer as home } from './reducers/homeReducer'
import {conversationReducer} from './reducers/conversationReducer'
import {userReducer} from './reducers/userReducer'
import { chatReducer as chat } from './reducers/chatReducer'
import {sessionReducer} from './reducers/sessionReducer'


export const rootReducer = combineReducers({
  reducer,
  home,
  conversationReducer,
  userReducer,
  chat,
  sessionReducer
})

export default myCreateStore(rootReducer, rootSaga)
