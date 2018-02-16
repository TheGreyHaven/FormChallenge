import React, { Component } from "react";
import "./Preview.css";
import Navigation from "../../components/Navigation";


class Preview extends Component {




	render(){
		console.log('state:');
		console.log(this.state);
		return (
			<div>
				<Navigation onClick={this.handleClick} />
				<div>

				</div>
				<h4>Preview</h4>
			</div>
		);

	}
}

export default Preview;