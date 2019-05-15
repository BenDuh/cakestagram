import { put, select, call } from 'redux-saga/effects'
import { getConv, CONVERSATION_GET} from '../redux/reducers/conversationReducer'
import api from '../config/api'

  
export function * conversationGet () {
    const rsp = yield call ([api, 'get'], "/conversations")
    yield put(getConv(rsp.data))
}