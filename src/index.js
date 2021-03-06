import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import Router from './router';
import Store from './store/index.js'
// import Store from 'src/store';


ReactDOM.render(
	// <Provider>
	// <App />,
	<Provider store={Store}>
		<Router />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
