import React, { Component } from "react";
import "./top.css";



const Top = props => (
  <div id="topFourth">
    <span onClick={props.onClick} id={ props.dotColor }>
      Hi
    </span>
  </div>
);

export default Top;

