import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { GET_POSTS_REQUEST } from '../redux/reducers/homeReducer';
import { getPostSaga } from './homeSaga';
import { GET_COMMENTS_REQUEST } from '../redux/reducers/commentsReducer';
import { getCommentsSaga } from './commentsSaga';
import { CONVERSATION_GET_REQUEST } from '../redux/reducers/conversationReducer'
import { MY_ACCOUNT_GET_REQUEST } from '../redux/reducers/myAccountReducer'
import { SESSION_GET_REQUEST } from '../redux/reducers/sessionReducer'
import { SIGNUP_GET_REQUEST } from '../redux/reducers/signupReducer'
import { conversationGet } from './conversationSaga'
import { USER_GET_REQUEST } from '../redux/reducers/userReducer';
import {userGet} from './userSaga'
import { GET_MESSAGES_REQUEST, POST_MESSAGE_REQUEST } from '../redux/reducers/chatReducer';
import { getMessagesSaga } from './chatSaga'
import { postMessageSaga } from './chatSaga'
import { sessionGet } from './sessionSaga'
import { signUpGet } from './signupSaga'
import {accountGetSaga} from './accountSaga' 
import { EDIT_GET_REQUEST } from '../redux/reducers/editProfilReducer';
import {editProfilSaga} from './editSaga'
import {POST_GET_REQUEST} from '../redux/reducers/postReducer'
import {postSaga} from '../sagas/postSaga'

export default function * rootSaga () {
  yield all([
    takeEvery(GET_POSTS_REQUEST, getPostSaga),
    takeEvery(GET_COMMENTS_REQUEST, getCommentsSaga),
    takeLatest(CONVERSATION_GET_REQUEST, conversationGet),
    takeLatest(SESSION_GET_REQUEST, sessionGet),
    takeLatest(SIGNUP_GET_REQUEST, signUpGet),
    takeLatest(USER_GET_REQUEST,userGet),
    takeLatest(GET_MESSAGES_REQUEST, getMessagesSaga),
    takeLatest(SESSION_GET_REQUEST, sessionGet),
    takeLatest(MY_ACCOUNT_GET_REQUEST,accountGetSaga),
    takeLatest(POST_MESSAGE_REQUEST, postMessageSaga),
    takeLatest(EDIT_GET_REQUEST,editProfilSaga),
    takeLatest(POST_GET_REQUEST,postSaga)
  ])
}

