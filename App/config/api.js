//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer pedvjwjsRZbf47vuhROxj0RgF8C0jGta4gUgtb4Lyz4'
    },
})

export default api