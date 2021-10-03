import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/',
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
})



export const dataAPI = {
    getData({page,limit,sort}) {
        return instance.get(`data?page=${page}&limit=${limit}&sort=${sort}`);
        //return fetch('http://localhost:3001/api/data').then(res => res.json());
    }
}