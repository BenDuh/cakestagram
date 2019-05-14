import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { APPLICATION_ACTION_REQUEST } from '../redux/reducers/applicationReducer';
import { getTest } from './applicationSaga';
import { getConv } from '../redux/reducers/conversationReducer';

export default function * rootSaga () {
  yield all([
    takeLatest(APPLICATION_ACTION_REQUEST, getTest),
    takeLatest(CONVERSATION_GET_REQUEST, getConv)
  ])
}

