import { combineReducers } from 'redux'
import myCreateStore from './createStore'
import rootSaga from '../sagas'
import { reducer } from './reducers/applicationReducer'
import { homeReducer as home } from './reducers/homeReducer'


export const rootReducer = combineReducers({
  reducer,
  home,
})

export default myCreateStore(rootReducer, rootSaga)
