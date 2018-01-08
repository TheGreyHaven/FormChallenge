import React, { Component } from "react";
import "./contact.css";

const Contact = props => (

    <div className="contactDiv container-fluid" id={ "contact" + props.dotColor }>
        <div id="contactTitle" align="center">Contact</div>
        <div className="row">
            <address align="center" className="col-sm-4">
                <a href="mailto:haven.giguere@gmail.com">
                  <div id="email" className="contactInfo">Email</div>
                </a>
            </address>
            <div align="center" className="col-sm-4">
                <a href="https://www.linkedin.com/in/haven-giguere/" target="_blank">
                  <div  id="linkedInDiv" className="contactInfo">LinkedIn</div>
                </a>
            </div>
            <div align="center" className="col-sm-4">
                <a href="https://github.com/TheGreyHaven" target="_blank">
                  <div id="gitHub" className="contactInfo">GitHub</div>
                </a>
            </div>
        </div>
    </div>

);




export default Contact;