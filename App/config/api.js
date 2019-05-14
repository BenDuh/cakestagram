//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer Y1gBUbThMLSXEpQOMz7RbGSYRL4P4KQ25IEopYLzgPY'
    },
})

export default api