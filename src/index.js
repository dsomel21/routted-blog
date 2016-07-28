import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router'
// browserHistory -whenever URL changes... tells React-Router
// how to interpret it
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    
    <Router history={browserHistory} />
  </Provider>
  , document.querySelector('.container'));


// Router decides what get's rendered on screen
// browserHistory manages changes in the URL
// other things like hashHistory that manages changes after hash in URL
// ex. http://example.com/example#54.html
// react router comes with histpry.history interacts with url and passes updates to router, and then it does react stuff