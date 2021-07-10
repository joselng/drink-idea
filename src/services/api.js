import axios from 'axios';

export const backendApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});

export const cocktailApi = axios.create({
  baseURL: process.env.REACT_APP_COCKTAIL_API,
});
