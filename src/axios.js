import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
