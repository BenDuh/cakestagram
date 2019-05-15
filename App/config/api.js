//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer JZt292kmrsV0KiyuAUju2dpx782jaf_YVq0ptwUDZ68'
    },
})

export default api