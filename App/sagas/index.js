import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { APPLICATION_ACTION_REQUEST } from '../redux/reducers/applicationReducer';
import { GET_POST_REQUEST } from '../redux/reducers/homeReducer';
import { getTest } from './applicationSaga';
import { getPostSaga } from './homeSaga';

export default function * rootSaga () {
  yield all([
    takeEvery(APPLICATION_ACTION_REQUEST, getTest),
    takeEvery(GET_POST_REQUEST, getPostSaga)
  ])
}
