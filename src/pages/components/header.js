import React from 'react'

class Header extends React.Component {
	render() {
		return (
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
		)
	}
}

export default Header;