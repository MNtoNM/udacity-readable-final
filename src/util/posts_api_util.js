import axios from 'axios';

const ROOT_URL = "http://localhost:3001"
export const config = {
  headers: { 'Authorization': 'whatever' }
};

export const fetchPosts = () => axios.get(`${ROOT_URL}/posts`, config);

export const fetchPost = (id) => axios.get(`${ROOT_URL}/posts/${id}`, config);

export const postVote = (id, valence) => axios.post(`${ROOT_URL}/posts/${id}`, valence, config);
