import axios from "axios";

const https = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const Api = {     
     requisi : async() => {
            const req = await https.get('/photos')
            return req.data
            }
    
}