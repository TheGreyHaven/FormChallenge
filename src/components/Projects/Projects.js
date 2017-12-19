import React, {Component} from "react";
import "./projects.css";
import mobingo from '../../images/mobingo350px.png';
import planit from '../../images/planit350px.png';
import womentor from '../../images/womentor350px.png';



class Projects extends Component {


	render() {
		return (
		    <div className="projectsDiv container-fluid" id={ "projects" + this.props.dotColor }>
		    	<div id="projectsTitle" align="center">Projects</div>
		    	<div className="row">
			    	<div align="center" className="col-md-4 circleOuterDiv">Mo'Bingo
			    		<div id="pCircle1" align="center" className="projectCircle">
			    			<img src={mobingo}></img>
			    		</div>
			    	</div>
			    	<div align="center" className="col-md-4 circleOuterDiv">Plan-It
			    		<div id="pCircle2" align="center" className="projectCircle">
			    			<img src={planit}></img>
			    		</div>
			    	</div>
			    	<div align="center" className="col-md-4 circleOuterDiv">Womentor
			    		<div id="pCircle3" align="center" className="projectCircle">
			    			<img src={womentor}></img>
			    		</div>
			    	</div>
			    </div>
		    </div>
		);
	  }
}






export default Projects;
	// figure out how to change the state of this depending on the prop that is being passed in