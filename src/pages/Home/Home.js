import React, { Component } from "react";
// import { Link } from "react-router-dom";
//Link provides the pathway to other pages. Used inside of a div. I don't need it for this app
import Projects from "../../components/Projects";
import Top from "../../components/Top";
import Illustrations from "../../components/Illustrations";
import Contact from "../../components/Contact";
import "./Home.css";



class Home extends Component {

  state = { isBlue: true
          };

  btnColor = {
    color: "blue"
  };

  btnColor2 = {
    color: "yellow"
  };


  handleClick = () => {
    console.log("toggled");
    this.setState({
    isBlue: !this.state.isBlue
    });
  };

  colorChecker = () => {
    if (this.state.isBlue === true) {
      return this.btnColor.color;
    } else {
      return this.btnColor2.color;
    }
  };





  render() {
    return (
      <div className="container-fluid">
        <Top onClick={this.handleClick} dotColor={this.colorChecker()} />
        <Projects onClick={this.onOpenModal} dotColor={this.colorChecker()} />
        <Illustrations dotColor={this.colorChecker()} />
        <Contact dotColor={this.colorChecker()}/>
      </div>
    );
  }
}


export default Home;

