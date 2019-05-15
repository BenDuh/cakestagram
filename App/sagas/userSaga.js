import { put, select, call } from 'redux-saga/effects'
import { getUser, USER_GET} from '../redux/reducers/userReducer'
import api from '../config/api'

  
export function * userGet () {
    const rsp = yield call ([api, 'get'], "/api/users")
    yield put(getUser(rsp.data))
    console.log(rsp.data)
}