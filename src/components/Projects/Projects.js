import React, {Component} from "react";
import "./projects.css";
import BingoModal from '../BingoModal';
import PlanitModal from '../PlanitModal';
import WomentorModal from '../WomentorModal';



class Projects extends Component {


	render() {
		return (
		    <div className="projectsDiv container-fluid" id={ "projects" + this.props.dotColor }>
		    	<div id="projectsTitle" align="center">Projects</div>
		    	<div className="row">
			    	<div align="center" className="col-md-4 circleOuterDiv">Mo'Bingo
			    		<div id="pCircle1" onClick={this.props.onClick} align="center" className="projectCircle">
			    			<BingoModal />
			    		</div>
			    	</div>
			    	<div align="center" className="col-md-4 circleOuterDiv">Plan-It
			    		<div id="pCircle2" align="center" className="projectCircle">
			    			<PlanitModal />
			    		</div>
			    	</div>
			    	<div align="center" className="col-md-4 circleOuterDiv">Womentor
			    		<div id="pCircle3" align="center" className="projectCircle">
			    			<WomentorModal />
			    		</div>
			    	</div>
			    </div>
		    </div>
		);
	  }
}






export default Projects;
	// figure out how to change the state of this depending on the prop that is being passed in