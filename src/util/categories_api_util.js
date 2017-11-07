import axios from 'axios';

const ROOT_URL = "http://localhost:3001"
export const config = {
  headers: { 'Authorization': 'whatever' }
};

export const fetchCategories = () => axios.get(`${ROOT_URL}/categories`, config);
