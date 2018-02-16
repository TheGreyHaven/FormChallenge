
import React, { Component } from 'react';
import "./Navigation.css";
import { NavLink } from 'react-router-dom'

class Navigation extends Component {


	render() {

		return (
			<div className="navigationBar">
				<nav className="navbar navbar-default">
		  			<div className="container-fluid">
		  			<h1>Form Builder</h1>
					    <div className="row" id="navList" align="center">
					      <ul className="nav navbar-nav">
					        <li className="col-sm-4 pageLinks" align="center"><NavLink activeClassName="activeNav" to="/home" href="#">Create</NavLink></li>
					        <li className="col-sm-4 pageLinks" align="center"><NavLink activeClassName="activeNav" to={{ pathname: '/preview', state: { homeState: this.props.state } }}  href="#">Preview</NavLink></li>
					        <li className="col-sm-4 pageLinks" align="center"><NavLink activeClassName="activeNav" to={{ pathname: '/exporter', state: { homeState: this.props.state } }} href="#">Export</NavLink></li>
					      </ul>
					    </div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navigation;