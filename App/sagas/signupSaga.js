import { put, select, call } from 'redux-saga/effects'
import { getSignup} from '../redux/reducers/signupReducer'
import NavigationService from '../navigation/NavigationService'
import api from '../config/api'

export function * signUpGet(actions){
    console.log(actions.payload.nom)
    const rsp = yield call (api.post, '/api/users/create',{"email":actions.payload.email,"last_name":actions.payload.nom,"first_name":actions.payload.prenom,"password":actions.payload.password}, { headers: { Accept: 'application/json' }})
    console.log(rsp)
    if(rsp.status==201){
        NavigationService.navigate('Home')
    }else{

    }
}