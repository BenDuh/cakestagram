import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { APPLICATION_ACTION_REQUEST } from '../redux/reducers/applicationReducer'
import { getTest } from './applicationSaga'
import { GET_POSTS_REQUEST } from '../redux/reducers/homeReducer';
import { getPostSaga } from './homeSaga';
import { CONVERSATION_GET_REQUEST } from '../redux/reducers/conversationReducer'
import { conversationGet } from './conversationSaga'
import { USER_GET, USER_GET_REQUEST } from '../redux/reducers/userReducer';
import {userGet} from './userSaga'
import { GET_MESSAGES_REQUEST } from '../redux/reducers/chatReducer';
import { getMessagesSaga } from './chatSaga'

export default function * rootSaga () {
  yield all([
    takeLatest(APPLICATION_ACTION_REQUEST, getTest),
    takeEvery(GET_POSTS_REQUEST, getPostSaga),
    takeLatest(CONVERSATION_GET_REQUEST, conversationGet),
    takeLatest(USER_GET_REQUEST,userGet),
    takeLatest(GET_MESSAGES_REQUEST, getMessagesSaga)
  ])
}

