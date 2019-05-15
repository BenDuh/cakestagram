//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'https://formation-api.k8s.svc.idee.cloud/api',
    headers: { 
        Accept: 'application/json',
        authorization: 'Bearer xqEA-4yERo8wAcchtXWqejjvrwDmR_NcjSZ-SwU4_hc'
    },
})

export default api