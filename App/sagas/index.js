import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { APPLICATION_ACTION_REQUEST } from '../redux/reducers/applicationReducer'
import { CONVERSATION_GET_REQUEST } from '../redux/reducers/conversationReducer'
import { SESSION_GET_REQUEST } from '../redux/reducers/sessionReducer'
import { SIGNUP_GET_REQUEST } from '../redux/reducers/signupReducer'
import { getTest } from './applicationSaga'
import { conversationGet } from './conversationSaga'
import { sessionGet } from './sessionSaga'
import { signUpGet } from './signupSaga'

export default function * rootSaga () {
  yield all([
    takeLatest(APPLICATION_ACTION_REQUEST, getTest),
    takeLatest(CONVERSATION_GET_REQUEST, conversationGet),
    takeLatest(SESSION_GET_REQUEST, sessionGet),
    takeLatest(SIGNUP_GET_REQUEST, signUpGet)
  ])
}

