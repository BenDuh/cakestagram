//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
<<<<<<< HEAD
        authorization: 'Bearer ga9YpRGD8T2UBZWwwZ42u1r1sPuPinwRlVU9EFwTAXg'
=======
        authorization: 'Bearer RRnWwkNhTyMhQyh0id-GumGGpKMper_UVJpIi_BOfYw'
>>>>>>> master
    },
})

export default api