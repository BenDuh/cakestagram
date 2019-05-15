//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer Pih_8wrDeNiQlPUz5JT-AgEmv68Uh6_iAyCyRQxB-Rs'
    },
})

export default api