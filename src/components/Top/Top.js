import React, { Component } from "react";
import "./top.css";
// import blue from '../../images/womanGlasses350pxblue.png';
// import yellow from '../../images/womanGlasses350pxyellow.png';



const Top = props => (
  <div id="topFourth">
    <div id="dotDiv">
      <span className="circle" onClick={props.onClick} id={ props.dotColor }>
      </span>
      <h1 id="myName" className={ props.dotColor }>Haven Giguere</h1>
      <h2 id="jobTitle">Software Engineer</h2>
    </div>
    <span className="LogoCircle">
    <img src={
      props.dotColor == "yellow" ?'/static/media/womanGlasses350pxblue.a8085bc4.png'
      : '/static/media/womanGlasses350pxyellow.2798791c.png'}>
    </img>
    </span>
  </div>
);

export default Top;


