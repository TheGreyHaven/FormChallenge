import React, { Component } from "react";
import "./Preview.css";
import Navigation from "../../components/Navigation";


class Preview extends Component {

  // componentDidMount = () => {
  //   const recievedState = this.props.location.state.homeState.questions
  //   const questions = recievedState.questions
  //   const types = recievedState.types

  // }

	render(){

		return (
			<div className="container">
				<Navigation  />
				<div className="container">
					<div className="previewQuestions">
						{this.props.location.state.homeState.questions.map((item, i) => {
							const type = this.props.location.state.homeState.types[i];
	          				return (
	          					<div>
		          					<div id="entirePreviewQuestionDiv"  ref={item} key={item + i}>
		                				<div className="PreviewQuestionDiv">{ item }</div>
		                				{type === 'yes/no' ? <div><input type="radio" value="yes"/>&nbsp;Yes&nbsp;&nbsp;<input type="radio" value="yes"/>&nbsp;No</div>
		  								: <input className="PreviewTypeDiv" type={ type }></input>}
		               				</div>
		               				<br />
	               				</div>

	               			)

        				}) }
					</div>
				</div>
				<h4>Preview</h4>
			</div>
		);

	}
}

export default Preview;