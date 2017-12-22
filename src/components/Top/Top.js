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
    Me in a nutshell...I am a recent graduate of Hackbright Academy, where I learned full-stack development
    in order to be prepared for a career as a software engineer.
    Before this I worked for a number of years as a free-lance illustrator doing scientific illustration
    and designing wedding invitations.
    It was during this time that I discovered programing.
    I used to do logic puzzles in my spare time and so when I realized that there was
    a job out there that might combine my abilities I decided to start studying.
    Creativity has been a huge asset in my journey of becoming a programmer and I hope to
    utilize all of my abilities in a position as a full-stack developer. Please feel free to check out my site.
    </div>
  </div>
);

export default Top;


