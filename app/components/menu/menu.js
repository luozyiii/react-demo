import React from 'react';
import ReactDOM from 'react-dom';
import './menu.scss';

export default class Menu extends React.Component {
	render() {
		return ( 
			<div>
				<ul className = 'ui-menu'>
					<li>
						<a href="#">首页</a>
					</li>
				</ul>
			</div>
		);
	}
}

// const Menu = React.createClass({
//   render() {
//     return <h1>Menu</h1>
//   }
// })

// export default Menu