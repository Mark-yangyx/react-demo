import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Personal from './pages/personal/index';
import Demo1 from './pages/demo-1';
import Conditional from './pages/conditional-rendering';
import AboutState from './pages/about-state';
// import {Provider} from "react-redux";
// import * as serviceWorker from './serviceWorker';
// import Store from 'src/store';

// const Routes = <Route path="/" component={App}>
// 	<Route path="/personal" component={Personal} />
// </Route>

const BasicRoute = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={App}></Route>
				<Route path="/personal" component={Personal} />
				<Route path="/demo1" component={Demo1} />
				<Route path="/boniu" component={Conditional} />
				<Route path="/state" component={AboutState} />
			</Switch>
		</HashRouter>
	)
}

export default BasicRoute;
