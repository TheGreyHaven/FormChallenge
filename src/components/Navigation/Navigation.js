
import React, { Component } from 'react';
import "./Navigation.css";
import { NavLink } from 'react-router-dom'

class Navigation extends Component {


	render() {

		return (
			<div className="navigationBar">
				<nav className="navbar navbar-default">
		  			<div className="container-fluid">
		    			<div className="navbar-header">
		      				<a className="navbar-brand" href="#">Form Builder</a>
					    </div>
					    <div>
					      <ul className="nav navbar-nav">
					        <li><NavLink activeClassName="activeNav" to="/home" href="#">Constructor</NavLink></li>
					        <li><NavLink activeClassName="activeNav" to={{ pathname: '/preview', state: { homeState: this.props.state } }}  href="#">Preview</NavLink></li>
					        <li><NavLink activeClassName="activeNav" to={{ pathname: '/exporter', state: { homeState: this.props.state } }} href="#">Export</NavLink></li>
					      </ul>
					    </div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navigation;