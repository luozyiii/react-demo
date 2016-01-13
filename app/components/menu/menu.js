import React from 'react';
import ReactDOM from 'react-dom';
import './menu.scss';

export default class Menu extends React.Component {
	render() {
		return ( 
			<div>
				<ul className = "ui-menu">
					<li className="item" id="home">
						<a href="/">
							<span className = "icon-home"></span>
							酷窝
						</a>
					</li>
					
					<li className="item" id="found">
						<a href="/found/index.html">
							<span className = "icon-found"></span>
							发现
						</a>
					</li>
					<li className="item">
						<span className="add"><span className="icon-add"></span></span>
					</li>
					<li className="item" id="mes">
						<a href="/mes/index.html">
							<span className = "icon-mes"></span>
							消息
						</a>
					</li>
					<li className="item" id="my">
						<a href="/my/index.html">
							<span className = "icon-my"></span>
							我
						</a>
					</li>
				</ul>
			</div>
		);
	}
	componentDidMount(){
		var _source = "";
		_source = $("body").data("source");
		// console.log(_source)
		if (_source == "home") {
			$("#home").addClass("active");
		}else if (_source == "found") {
			$("#found").addClass("active");
		}else if (_source == "mes") {
			$("#mes").addClass("active");
		}else if (_source == "my"){
			$("#my").addClass("active");
		}else {
			return;
		}
	}
}