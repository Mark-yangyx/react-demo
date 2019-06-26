import React from 'react';
import { Component } from 'react'
import './index.styl';

import {connect} from 'react-redux';

import { setPersonal } from '../../store/actions.js'

import {data} from './data.js';

class Index extends Component {
	componentDidMount() {
		let { setPersonal } = this.props;
		
		setPersonal(data);
	}
	render() {
		let { personInfo } = this.props;
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
					<a href="#/" className="backHome">返回首页</a>
				</header>
				<section className="content">
					<ul>
						{personInfo && personInfo.length && personInfo.map((k,v) => {
							return (
								<li key={'v'+v}>{k.value}</li>
							)
						})}
					</ul>
				</section>
				<footer className="footer-info">
					<p>书山有路勤为径，学海无涯苦作舟。</p>
					<p>shu shan you lu qin wei jing , xue hai wu ya ku zuo zhou .</p>
					<a href="https://www.jianshu.com/p/7a867be0594a" target="blank">关于reudx</a>
				</footer>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		personInfo: state.personInfo
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setPersonal(data) {
			dispatch(setPersonal(data))
		}
	}
}

// export default Index;
export default connect(mapStateToProps, mapDispatchToProps)(Index);