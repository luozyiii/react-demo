import './vip.scss';
import React from 'react';
import ReactDOM from 'react-dom';
export default class Hello extends React.Component {
	render() {
		return ( 
			< div className = "" >
				<h1>酷窝移动版app22222</h1>
				
			< /div>
		);
	}
}

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}