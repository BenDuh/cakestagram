import { put, call } from 'redux-saga/effects'
import { getComments } from '../redux/reducers/commentsReducer'
import api from '../config/api'

export function* getCommentsSaga(action) {
    const myId = action.payload.myId
    console.log("Saga myId", myId)
    
    const rsp = yield call([api, 'get'], `/api/posts/${myId}/comments`)
    console.log("Saga rsp", rsp)
    yield put(getComments(rsp.data))
}