import React from 'react';
import './personal/index.styl';
import './demos.styl';
import Header from './components/header'

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()}
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.tick()
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	render() {
		return (
			<div className="person-wrapper">
				<Header></Header>
				<div className="demo1">
					<h1>hello, world</h1>
					<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
				</div>
			</div>
		)
	}
}

export default Clock;