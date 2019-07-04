import React from 'react';
import Header from './components/header'
import './demos.styl'

class Conditional extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			age: 1,
			firstName: 'Yang'
		}
	}

	render() {
		return (
			<div className="person-wrapper">
				<Header></Header>
				<section className="info-conditional">
					<h1>波妞</h1>
					{this.state.age === 1 && 
						<span>hello baby</span>
					}
					<div>What's her surname?</div>
					{
						this.state.firstName ? (<span>her surname is : {this.state.firstName} </span>) : (<span>gao</span>)
					}
				</section>
			</div>
		)
	}
}

export default Conditional;