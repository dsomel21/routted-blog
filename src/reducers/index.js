import { combineReducers } from 'redux';
import PostsReducer from './posts';
/* import reducer, but call it formReducer */
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  	posts: PostsReducer,
  	form: formReducer
});

export default rootReducer;
