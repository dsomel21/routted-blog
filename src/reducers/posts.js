import { GET_POSTS, GET_POST } from '../actions/index';

/* Seperate piece of state for list of posts, and individual post */
const INITIAL_STATE = { all: [], post: null};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case GET_POSTS:
			return { ...state, all: action.payload.data };

		case GET_POST:
			return { ...state, post: action.payload.data };

		default:
			return state;
		}
	}