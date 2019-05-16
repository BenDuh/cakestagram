import { put, select, call } from 'redux-saga/effects'
import { getSignup} from '../redux/reducers/signupReducer'
import { getSession} from '../redux/reducers/sessionReducer'
import NavigationService from '../navigation/NavigationService'
import api from '../config/api'

export function * signUpGet(actions){

    const rsp = yield call (api.post, '/api/users/create',{"email":actions.payload.email,"last_name":actions.payload.nom,"first_name":actions.payload.prenom,"password":actions.payload.password}, { headers: { Accept: 'application/json' }})
    if(rsp.status==201){
        const token = yield call(api.post, '/oauth/token', {grant_type: 'password',username: actions.payload.email, password: actions.payload.password}, { headers: { Accept: 'application/json' } })
        yield call(api.setHeader,'Authorization', `Bearer ${token.data.access_token}`)
        const rsp2= yield call(api.get, '/api/me')
        yield put(getSession(rsp2.status))
        if(rsp2.status==200){
            NavigationService.navigate('Home')
        } else{
            const error = 'Connexion impossible'
            yield put ({type: 'SESSION_GET_ERROR', error})
        }
    }else{
        const error = rsp.data.messages
        yield put ({type: 'SIGNUP_GET_ERROR', error})
    }
}