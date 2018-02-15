import React, { Component } from 'react';
import "./Question.css";


//this class is not maintaing the items but is getting the items as an input
//we are returning a list of itms so we have to iterate over the list in order to display them correctly
//React likes to have a unique key associated with each item so we set the key to be the item
//We create a delete button. We can't delete here because the parent component is in charge of maintaining the list so handleDelete needs to be in App
//I'm note sure why changing .bind( to null works I should look it up.
class Question extends Component {

  render() {

    return (
      <div className="formDiv">
        {this.props.items.map((item, i) => {
          const selectMenuItem = this.props.chosenMenuItem[i];
          return  <div id="entireQuestionDiv"  ref={item} key={item + i}>
                <div className="questionDiv">Question:<span className="questionSpan">{ item }</span></div>
                <div className="typeDiv">Type:<span className="typeSpan">{selectMenuItem}</span></div>
                <a href="#" onClick={this.props.handleDelete.bind(null, selectMenuItem, item)}>
                  <button className="deleteButton">Delete</button>
                </a>
               </div>

        }) }
      </div>
    );
  }
}

export default Question;
