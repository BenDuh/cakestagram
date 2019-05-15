import { put, call } from 'redux-saga/effects'
import { getMessages } from '../redux/reducers/chatReducer'
import api from '../config/api'

export function* getMessagesSaga() {
  // ATTENTION L'ID DE LA PERSONNE AVEC LAQUELLE ON DISCUTE EST CODÉE EN DUR ICI
  const rsp = yield call([api, 'get'], '/conversations/1/messages?limit=10')
  yield put(getMessages(rsp.data))
}