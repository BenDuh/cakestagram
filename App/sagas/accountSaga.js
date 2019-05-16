import { put, select, call } from 'redux-saga/effects'
import {getMyAccount} from '../redux/reducers/myAccountReducer'
import api from '../config/api'

export function* accountGetSaga(){
    const rsp = yield call ([api, 'get'], 'api/me')
    console.log(rsp)
    yield put(getMyAccount(rsp.data))
}