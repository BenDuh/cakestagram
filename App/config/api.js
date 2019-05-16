//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud',
    headers: { 
        Accept: 'application/json'
    },
})

export default api