import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
// import {connect} from 'react-redux';
import './app.styl';

class App extends Component{
	state = {
		liData: [{
			key: 'name',
			value: 'mark'
		}, {
			key: 'authoer',
			value: 'markyang'
		}, {
			key: 'demo',
			value: 'react'
		}, {
			key: 'demo',
			value: 'stylus'
		}]
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
				</header>
				<section className="personal-info">
					<ul>
						{this.state.liData.map((k,v)=>{
							return (
								<li key={'v'+v}>
									<span className="span-l">{k.key}</span>
									<label>:</label>
									<span className="span-r">
									 	<a href="#/personal">{k.value}</a>
									</span>
								</li>
							)
						})}
					</ul>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</section>
			</div>
		)
	}
}
// function mapStateToProps(state) {
//   console.log(state);
// }

// export default connect(mapStateToProps)(App);
export default App;
