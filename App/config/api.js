//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer ga9YpRGD8T2UBZWwwZ42u1r1sPuPinwRlVU9EFwTAXg'
    },
})

export default api