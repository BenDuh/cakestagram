import { combineReducers } from 'redux'
import myCreateStore from './createStore'
import rootSaga from '../sagas'
import {reducer} from './reducers/applicationReducer'
import {conversationReducer} from './reducers/conversationReducer'

export const rootReducer = combineReducers({
  reducer,
  conversationReducer
})

export default myCreateStore(rootReducer, rootSaga)
