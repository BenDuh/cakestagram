import { put, select, call } from 'redux-saga/effects'
import api from '../config/api'
import {postLike} from '../redux/reducers/likeReducer'


export function * postLikeSaga (action) {
    console.log("ou est l'action", action.payload)
    const myLike= action.payload.like
    const rsp = yield call ([api, 'post'], `/api/${myLike}/unlikes`)
    yield put(postLike(rsp.data))
}