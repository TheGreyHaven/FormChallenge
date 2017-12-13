import React, { Component } from "react";
import "./top.css";


if( {props.dotColor} === "blue"){
  let logoImg = "../../images/womanGlasses350px";
}else{
  let logoImg = "../../images/womanGlassesPink350px";
}

const Top = props => (
  <div id="topFourth">
    <div id="dotDiv">
      <span className="circle" onClick={props.onClick} id={ props.dotColor }>
      </span>
    </div>
    <span className="LogoCircle"><img src="logoImg"></img>
    </span>
    <h1 align="right">Haven Giguere</h1>
  </div>
);

export default Top;

variable = (condition) ? true-value : false-value;