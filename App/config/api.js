//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer a7lzYgthEtsxtDstXtcSd3DujDMeNyAdBt-fQapLWzw'
    },
})

export default api