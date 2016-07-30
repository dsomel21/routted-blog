import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';

const URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=98388288og'

export function getPosts() {
	const request = axios.get(`${URL}/posts/${API_KEY}`);
	return (
		type: GET_POSTS,
		payload: request
	)
}