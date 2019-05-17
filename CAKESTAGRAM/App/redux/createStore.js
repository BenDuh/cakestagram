import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

const myCreateStore = (rootReducer, rootSaga) => {
  const middleware = []
  const sagaMiddleware = createSagaMiddleware()

  middleware.push(sagaMiddleware)

  const store = createStore(rootReducer, applyMiddleware(...middleware))

  sagaMiddleware.run(rootSaga)

  return store
}

export default myCreateStore
