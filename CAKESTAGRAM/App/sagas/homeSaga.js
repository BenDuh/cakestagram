import { put, call } from 'redux-saga/effects'
import { getPosts, postLike } from '../redux/reducers/homeReducer'
import api from '../config/api';


export function* getPostSaga() {
    const rsp = yield call([api, 'get'], "/api/posts")
    yield put(getPosts(rsp.data))
}

/* export function* postLikeSaga() {
    const myLike = action.payload.like
    yield call(
        [api, 'post'], 
        `/api/posts/${myLike}/likes`, 
        { like }, 
        { accept: 'application/json' }
        )
}
 */