import { put, call } from 'redux-saga/effects'
import { getComments } from '../redux/reducers/commentsReducer'
import api from '../config/api'

export function* getCommentsSaga(action) {
    const myId = action.payload.myId
    const rsp = yield call([api, 'get'], `/api/posts/${myId}/comments`)
    yield put(getComments(rsp.data))
}