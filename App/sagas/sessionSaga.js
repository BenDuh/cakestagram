import { put, select, call } from 'redux-saga/effects'
import { getSession} from '../redux/reducers/sessionReducer'
import NavigationService from '../navigation/NavigationService'
import api from '../config/api'
  
export function * sessionGet (actions) {
    const rsp = yield call(api.post, '/oauth/token', {grant_type: 'password',username: actions.payload.email, password: actions.payload.password}, { headers: { Accept: 'application/json' } })
    yield call(api.setHeader,'Authorization', `Bearer ${rsp.data.access_token}`)
    const rsp2= yield call(api.get, '/api/me')
    yield put(getSession(rsp2.status))
    if(rsp2.status==200){
        NavigationService.navigate('Home')
    }else{
        const error = 'Username ou Password invalide'
        yield put ({type: 'SESSION_GET_ERROR', error})
    }
}