import { combineReducers } from 'redux'
import myCreateStore from './createStore'
import rootSaga from '../sagas'
import { homeReducer as home } from './reducers/homeReducer'
import { conversationReducer } from './reducers/conversationReducer'
import { userReducer } from './reducers/userReducer'
import { chatReducer as chat } from './reducers/chatReducer'
import { sessionReducer } from './reducers/sessionReducer'
import { signupReducer } from './reducers/signupReducer'
import { commentsReducer as comments } from './reducers/commentsReducer'
import { myAccountReducer } from './reducers/myAccountReducer'


export const rootReducer = combineReducers({
  home,
  conversationReducer,
  sessionReducer,
  signupReducer,
  userReducer,
  chat,
  sessionReducer,
  comments,
  myAccountReducer
})

export default myCreateStore(rootReducer, rootSaga)
