import React, { Component } from "react";
import "./top.css";
import womanGlassesblue from '../../images/womanGlasses350px.png';
import womanGlassesyellow from '../../images/womanGlassesYellow350px.png';



const Top = props => (

  let currentImg;

  if ( {props.dotColor} == "yellow"){
    currentImg = {womanGlassesblue}
  }else{
    currentImg = {womanGlassesyellow}
  }

  <div id="topFourth">
    <div id="dotDiv">
      <span className="circle" onClick={props.onClick} id={ props.dotColor }>
      </span>
    </div>
    <span className="LogoCircle"><img src={currentImg}></img>
    </span>
    <h1 align="right" className={ props.dotColor }>Haven Giguere</h1>
  </div>
);

export default Top;
