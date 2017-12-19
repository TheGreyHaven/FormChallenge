import React, { Component } from "react";
import "./contact.css";

const Contact = props => (

    <div className="contactDiv container-fluid" id={ "contact" + props.dotColor }>
    	<div id="contactTitle" align="center">Contact</div>
    	<div className="row">
    		<div align="center" className="col-sm-4">
    			<div id="email" className="contactInfo">Email</div>
    		</div>
    		<div align="center" className="col-sm-4">
    			<div  id="linkedInDiv" className="contactInfo">LinkedIn</div>
    		</div>
    		<div align="center" className="col-sm-4">
    			<div id="gitHub" className="contactInfo">GitHub</div>
    		</div>
    	</div>
    </div>

);




export default Contact;