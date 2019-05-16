import { put, call } from 'redux-saga/effects'
import { getMessages, postMessage } from '../redux/reducers/chatReducer'
import api from '../config/api'

export function* getMessagesSaga(action) {
  const { conversationId } = action.payload
  console.log('id in getMessageSaga', conversationId)
  const rsp = yield call([api, 'get'], `/api/conversations/${conversationId}/messages?limit=10`)
  yield put(getMessages(rsp.data))
}

export function* postMessageSaga(action) {
  const { conversationId, text } = action.payload
  console.log('text dans postMessageSaga', text)

  yield call(
    api.post,
    `/api/conversations/${conversationId}/messages`,
    { text },
    { accept: 'application/json' }
  )
}

// const rsp = yield call(api.post, '/oauth/token', {grant_type: 'password',username: actions.payload.email, password: actions.payload.password}, { headers: { Accept: 'application/json' } })