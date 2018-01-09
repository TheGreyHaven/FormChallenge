import React, { Component } from "react";
import "./top.css";
import bluePic from '../../images/womanGlasses350pxblue.png';
import yellowPic from '../../images/womanGlasses350pxyellow.png';



const Top = props => (
  <div id="topFourth" className="container-fluid">
    <div id="dotDiv">
      <div className="LogoCircleSmall" align="center">
        <img src={
          props.dotColor == "yellow" ?'/static/media/womanGlasses350pxblue.a8085bc4.png'
          : '/static/media/womanGlasses350pxyellow.2798791c.png'}>
        </img>
      </div>
      <div id="mySmallName" align="center" className={ props.dotColor }>Haven Giguere</div>
      <div id="jobSmallTitle" align="center">Software Engineer</div>
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
    <div id="bio">
    I first discovered software development during my time as a free-lance illustrator
    when I was running my own small business. I spent years running a wedding invitation
    design and production shop while creating scientific illustrations on the side
    (many of which have been published by the world’s largest news outlets such as ABC, BBC,
     CBS, NBC, and USA Today).
    <br></br><br></br>
    I love to solve challenges of both the creative and logical form, and was elated to find
    that software development is a combination of both. For the past few years I’ve been
    building up my knowledge of software development through an independent study,
    which mostly consisted of taking online courses and applying my newfound knowledge to side
    projects. Recently, I decided to take the leap and enroll in Hackbright Academy to
    accelerate my learnings in full-stack software development.
    <br></br><br></br>
    Creativity has been a huge asset in my journey of becoming a software engineer and I’m
    eager to bring my unique perspective to help the right company build great products!
    </div>
  </div>
);

export default Top;


