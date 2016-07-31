import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router'
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

// browserHistory -whenever URL changes... tells React-Router
// how to interpret it
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>  
	  <Router history={browserHistory} routes={routes} />
  </Provider>, document.querySelector('.container')
);


// Router decides what get's rendered on screen
// browserHistory manages changes in the URL
// other things like hashHistory that manages changes after hash in URL
// ex. http://example.com/example#54.html
// react router comes with histpry.history interacts with url and passes updates to router, and then it does react stuff