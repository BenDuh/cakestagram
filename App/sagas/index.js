import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { APPLICATION_ACTION_REQUEST } from '../redux/reducers/applicationReducer'
import { getTest } from './applicationSaga'
import { GET_POSTS_REQUEST } from '../redux/reducers/homeReducer';
import { getPostSaga } from './homeSaga';
import { CONVERSATION_GET_REQUEST } from '../redux/reducers/conversationReducer'
import { MY_ACCOUNT_GET_REQUEST } from '../redux/reducers/myAccountReducer'
import { SESSION_GET_REQUEST } from '../redux/reducers/sessionReducer'
import { SIGNUP_GET_REQUEST } from '../redux/reducers/signupReducer'
import { conversationGet } from './conversationSaga'
import { USER_GET_REQUEST } from '../redux/reducers/userReducer';
import {userGet} from './userSaga'
import { GET_MESSAGES_REQUEST } from '../redux/reducers/chatReducer';
import { getMessagesSaga } from './chatSaga'
import { sessionGet } from './sessionSaga'
import { signUpGet } from './signupSaga'
import {accountGetSaga} from './accountSaga' 

export default function * rootSaga () {
  yield all([
    // takeLatest(APPLICATION_ACTION_REQUEST, getTest),
    takeEvery(GET_POSTS_REQUEST, getPostSaga),
    takeLatest(CONVERSATION_GET_REQUEST, conversationGet),
    takeLatest(SESSION_GET_REQUEST, sessionGet),
    takeLatest(SIGNUP_GET_REQUEST, signUpGet),
    takeLatest(USER_GET_REQUEST,userGet),
    takeLatest(GET_MESSAGES_REQUEST, getMessagesSaga),
    takeLatest(SESSION_GET_REQUEST, sessionGet),
    takeLatest(MY_ACCOUNT_GET_REQUEST,accountGetSaga)
  ])
}

