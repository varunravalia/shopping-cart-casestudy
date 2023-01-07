import axios from 'axios';
const token = localStorage.auth_token
const instance = axios.create({
  baseURL: 'http://localhost:3001/api/',
  withCredentials:true,
  credentials: "include",
  headers: {
    'Content-Type': 'application/json',
    // 'auth_token': token ? token : null
  },
});

export default instance;