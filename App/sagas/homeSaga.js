import { put, call } from 'redux-saga/effects'
import { getPosts } from '../redux/reducers/homeReducer'
import api from '../config/api';

export function* getPostSaga() {
    const rsp = yield call([api, 'get'], "/api/posts")
    yield put(getPosts(rsp.data))
}