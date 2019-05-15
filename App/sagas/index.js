import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { APPLICATION_ACTION_REQUEST } from '../redux/reducers/applicationReducer'
import { CONVERSATION_GET_REQUEST } from '../redux/reducers/conversationReducer'
import { getTest } from './applicationSaga'
import { conversationGet } from './conversationSaga'
import { USER_GET, USER_GET_REQUEST } from '../redux/reducers/userReducer';
import {userGet} from './userSaga'

export default function * rootSaga () {
  yield all([
    takeLatest(APPLICATION_ACTION_REQUEST, getTest),
    takeLatest(CONVERSATION_GET_REQUEST, conversationGet),
    takeLatest(USER_GET_REQUEST,userGet)
  ])
}

