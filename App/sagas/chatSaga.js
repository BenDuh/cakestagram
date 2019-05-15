import { put, call } from 'redux-saga/effects'
import { getMessages } from '../redux/reducers/chatReducer'
import api from '../config/api'

export function* getMessagesSaga(action) {
  const id = action.payload.conversationId
  console.log('id in getMessageSaga', id)
  const rsp = yield call([api, 'get'], `/api/conversations/${id}/messages?limit=10`)
  yield put(getMessages(rsp.data))
}