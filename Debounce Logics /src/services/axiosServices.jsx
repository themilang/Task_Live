import axios from 'axios';

const BASE_URI = import.meta.env.VITE_BASE_API_URI;
const API_KEY = import.meta.env.VITE_API_KEY;

console.log("BASE_URI:", BASE_URI);
console.log("API_KEY:", API_KEY);

const api = axios.create({
  baseURL: BASE_URI,
  headers: {
    'X-Api-Key': API_KEY
  }
});

export const getDomain = (domain) => {
  return api.get('/whois', {
    params: { domain } 
  });
};


