import axios from "axios";

const https = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const Api = {     
     requisi : async() => {
            const req = await https.get(`/photos`)
            return req.data
            },
    requisçao : async(id:number) => {
                const req = await https.get(`/photos/${id}`)
                return req.data
                }
    
}