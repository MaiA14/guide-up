import history from '../history.js';
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:3001/api/'


var Axios = axios.create({
    withCredentials: true
});

export default {
    get(endpoint, data){
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data){
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data){
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data){
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method='get', data=null , dispatch) {

    try {
        const res = await Axios({
            
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
          

        })

  
        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
          history.push('/'); // diaspatch ('authorition error')
        }
          // diaspatch ('error')
          throw err; 
    }
}