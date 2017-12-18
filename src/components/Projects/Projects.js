import React, { Component } from "react";
import "./projects.css";

const Projects = props => (

    <div className="projectsDiv container-fluid" id={ "projects" + props.dotColor }>
    	<div id="projectsTitle" align="center">Projects</div>
    	<div className="row">
	    	<div align="center" className="col-md-4 circleOuterDiv">Mo'Bingo
	    		<div id="pCircle1" align="center" className="projectCircle">
	    		</div>
	    	</div>
	    	<div align="center" className="col-md-4 circleOuterDiv">Plan-It
	    		<div id="pCircle2" align="center" className="projectCircle">
	    		</div>
	    	</div>
	    	<div align="center" className="col-md-4 circleOuterDiv">Womentor
	    		<div id="pCircle3" align="center" className="projectCircle">
	    		</div>
	    	</div>
	    </div>
    </div>

);




export default Projects;
	// figure out how to change the state of this depending on the prop that is being passed in