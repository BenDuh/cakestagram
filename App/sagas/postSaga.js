import { put, select, call } from 'redux-saga/effects'
import { getPost} from '../redux/reducers/sessionReducer'
import NavigationService from '../navigation/NavigationService'
import api from '../config/api'


export function * postSaga (actions) {
    const rsp = yield call(api.post,'/posts',{ headers: { Accept: 'application/json' } },{"text":actions.payload.title,"type_post":"image","attachment":""})
    yield console.log(rsp)
    yield NavigationService.navigate('Home')


} 