import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';

const URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=98388288og'

export function getPosts() {
	const request = axios.get(`${URL}/posts/${API_KEY}`);
	return {
		type: GET_POSTS,
		payload: request
	};
}

export function createPost(props) {
	const request = axios.post(`${URL}/posts/${API_KEY}`, props);
	return {
		type: CREATE_POST,
		payload: request
	};
}

export function getPost(id){
	const request = axios.get(`${URL}/posts/${id}${API_KEY}`);
	return {
		type: GET_POST,
		payload: request
	};
}

export function deletePost(id){
	const request = axios.delete(`${URL}/posts/${id}${API_KEY}`);
	return {
		type: DELETE_POST,
		payload: request
	};
}