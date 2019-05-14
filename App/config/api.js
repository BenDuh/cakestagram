//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer lOyG2pIFGuq1OvoXIRPUaMdDAw-CQsl6nPOzdpEQvmA'
    },
})

export default api