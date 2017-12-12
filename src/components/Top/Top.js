import React, { Component } from "react";
import "./top.css";

class Top extends Component {

  render() {

      return(
        <div id="topFourth">
          <button onClick={this.props.color}>
            {this.props.color ? 'ON' : 'OFF'}
          </button>

        </div>
      );
    }

}

export default Top;


