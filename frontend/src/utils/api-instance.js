import axios from "axios";

const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

export { apiInstance };