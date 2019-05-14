import { combineReducers } from 'redux'
import myCreateStore from './createStore'
import rootSaga from '../sagas'
import {reducer} from './reducers/applicationReducer'




export const rootReducer = combineReducers({
  reducer,
  conversation
})

export default myCreateStore(rootReducer, rootSaga)
