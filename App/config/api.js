//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer QtzUvA-xL0er7zlSnj4aa-zZGry5EG-5Sh0rnp60I-s'
    },
})




export default api