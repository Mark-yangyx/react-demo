import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import {connect} from 'react-redux';
import './app.styl';
import { setPageTitle, setInfoList } from './store/actions.js'

class App extends Component{

	constructor(props) {
		super(props)
		this.state = {
			liData: [{
				key: 'name',
				value: 'mark'
			}, {
				key: 'authoer',
				value: 'markyang'
			}, {
				key: 'demo1',
				value: 'demo1'
			}, {
				key: 'demo2',
				value: 'stylus'
			}]
		}
	}

	componentDidMount () {
		let { setPageTitle, setInfoList } = this.props
		// console.log(setPageTitle, 'setPageTitle');
    
    // 触发setPageTitle action
    setPageTitle('新的标题')
    
    // 触发setInfoList action
    setInfoList()
	}
	
	routerTo(k) {
		if (k.key === 'demo1') {
			this.props.history.push('/demo1');
		} else {
			this.props.history.push('/personal');
		}
	}
	
	render() {
		// 从props中解构store
		let {pageTitle, infoList} = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<span>{pageTitle}{infoList}</span>
				</header>
				<section className="personal-info">
					<ul>
						{this.state.liData.map((k,v)=>{
							return (
								<li key={'v'+v}>
									<span className="span-l">{k.key}</span>
									<label>:</label>
									<span className="span-r">
									 	<a href="javascript:;" onClick={() => this.routerTo(k)}>{k.value}</a>
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

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitle (data) {
			// 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
			dispatch(setPageTitle(data))
			// 执行setPageTitle会返回一个函数
			// 这正是redux-thunk的所用之处:异步action
			// 上行代码相当于
			/*dispatch((dispatch, getState) => {
					dispatch({ type: 'SET_PAGE_TITLE', data: data })
			)*/
    },
    setInfoList (data) {
      dispatch(setInfoList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
