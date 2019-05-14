import { put, select, call } from 'redux-saga/effects'
import { testApp, APPLICATION_ACTION } from '../redux/reducers/applicationReducer'
import { Alert } from 'react-native'

export function * getTest () {
    yield put(testApp('ttyt'))
}

