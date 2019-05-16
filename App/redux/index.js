import { combineReducers } from 'redux'
import myCreateStore from './createStore'
import rootSaga from '../sagas'
import { reducer } from './reducers/applicationReducer'
import { homeReducer as home } from './reducers/homeReducer'
import {conversationReducer} from './reducers/conversationReducer'
import {userReducer} from './reducers/userReducer'
import { chatReducer as chat } from './reducers/chatReducer'
import {sessionReducer} from './reducers/sessionReducer'
import {signupReducer} from './reducers/signupReducer'
import {myAccountReducer} from './reducers/myAccountReducer'


export const rootReducer = combineReducers({
  reducer,
  home,
  conversationReducer,
  sessionReducer,
  signupReducer,
  userReducer,
  chat,
  sessionReducer,
  myAccountReducer
})

export default myCreateStore(rootReducer, rootSaga)
