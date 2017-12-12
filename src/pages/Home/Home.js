import React, { Component } from "react";
// import { Link } from "react-router-dom";
//Link provides the pathway to other pages. Used inside of a div. I don't need it for this app
import Projects from "../../components/Projects";
import Top from "../../components/Top";
import Illustrations from "../../components/Illustrations";
import "./Home.css";



class Home extends Component {

  state = { isBlue: true };


  handleClick() {
    this.setState({
      isBlue: !this.state.isBlue
    })

    console.log('toggled');
  }



  render() {
    return (
      <div className="container-fluid">
        <Top />
        <Projects color={this.handleClick} />
        <Illustrations />
      </div>
    );
  }
}

export default Home;

//<Projects color={this.state.isBlue} />