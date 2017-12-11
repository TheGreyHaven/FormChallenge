import React, { Component } from "react";
// import { Link } from "react-router-dom";
//Link provides the pathway to other pages. Used inside of a div. I don't need it for this app
import Projects from "../../components/Projects";
import "./Home.css";

class Home extends Component {
  constructor(props) {

    this.state = { isBlue: true };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
    isBlue: !prevState.isBlue
    }));
  }

  render() {
    return (
      <div>
        <div className='page-wrapper'> <Projects color={this.state.isBlue} /> </div>
      </div>
    );
  }
}
export default Home;