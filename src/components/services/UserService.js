import axios from 'axios';

const APIURL = 'http://localhost:8000/api/';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6InJheSIsImV4cCI6MTU3ODkyODEzOSwiZW1haWwiOiJyYXlAZ21haWwuY29tIn0.fqBm7tMzAA_pNKjdxhBbL5oecOmFxdERdt1vodUBxis';

export default class UserService{
    loginUser(user){
        const url = `${APIURL}token_auth/`;
        return axios.post(url,user);
    }
    getUser(){
        const url = `${APIURL}current_user/`;
        return axios.get(url,{
            headers:{Authorization: `Bearer ${localStorage.getItem('access')}`}
        }); 
    }

}