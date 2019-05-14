import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { APPLICATION_ACTION_REQUEST } from '../redux/reducers/applicationReducer';
import { getTest } from './applicationSaga';

export default function * rootSaga () {
  yield all([
    takeEvery(APPLICATION_ACTION_REQUEST, getTest)
  ])
}
