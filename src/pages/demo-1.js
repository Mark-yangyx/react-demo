import React from 'react';
import './personal/index.styl';
import './demos.styl';

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
				<header className="header-info">
					<div className="headerImg">
						<span className="img"></span>
					</div>
					<div className="name">
						<h1>markyang</h1>
						<span>web前端-react</span>
					</div>
					<a href="#/" className="backHome">返回首页（测试加密）</a>
				</header>
				<div className="demo1">
					<h1>hello, world</h1>
					<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
				</div>
			</div>
		)
	}
}

export default Clock;