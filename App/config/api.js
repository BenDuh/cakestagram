//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer RRnWwkNhTyMhQyh0id-GumGGpKMper_UVJpIi_BOfYw'
    },
})

export default api