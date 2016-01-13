import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../../components/menu/menu.js';
import './home.scss';

export default class Home extends React.Component {
	render() {
		return ( 
			<div>
				<div>
					首页
				</div>

				<Menu />
			</div>
		);
	}
}

main();

function main() {
    ReactDOM.render(<Home />, document.getElementById('app'));
}