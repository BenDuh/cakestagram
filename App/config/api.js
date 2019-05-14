//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer xkAkR1JEy4oBbvJ4TZfDCAm6wBFwstXvDx0V_vG7UoI'
    },
})

export default api