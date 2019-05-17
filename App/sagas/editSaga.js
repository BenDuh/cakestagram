import { put, call } from 'redux-saga/effects'
import { getEdit } from '../redux/reducers/editProfilReducer'
import {getMyAccount} from '../redux/reducers/myAccountReducer'
import api from '../config/api'

export function* editProfilSaga(actions){
 const rsp = yield call(api.post,"api/users/edit",{"last_name":actions.payload.nom,"first_name":actions.payload.prenom}, { headers: { Accept: 'application/json' } })
 console.log('editsaga',rsp)
 yield put(getEdit(rsp.data))
 yield put(getMyAccount(rsp.data))
}