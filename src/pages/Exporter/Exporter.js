import React, { Component } from "react";
import "./Exporter.css";
import Navigation from "../../components/Navigation";


class Exporter extends Component {

	componentDidMount = () => {
	    const recievedState = this.props.location.state.homeState
	    const questions = recievedState.questions
	    const types = recievedState.types
	    const exportObj = {};
	    for (let i in questions){
	    	exportObj["questionSet" + i] = {"question" : questions[i], "type": types[i]}
	    }
	    return(exportObj);

  }

	render(){
		return (
			<div className="container">
				<Navigation />
				<div className="container" id="exportContainerDiv">
					<div id="divToCenter" align="center">
						<p className="jsonString" align="center">{JSON.stringify(this.componentDidMount())}</p>
					</div>
				</div>
			</div>
		);

	}
}
export default Exporter;