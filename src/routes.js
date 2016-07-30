import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const AnothaOne = () => {
	return <div>Hey there!</div>;
};

export default (
	<Route path="/"component={App}>
		<Route path="greet" component={AnothaOne} />
		<Route path="greet2" component={AnothaOne} />
		<Route path="greet3" component={AnothaOne} />
	</ Route>
);
