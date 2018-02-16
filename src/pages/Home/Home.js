import React, { Component } from "react";
import "./Home.css";
import Questions from "../../components/Question";
import Navigation from "../../components/Navigation";

class App extends Component {
 constructor() {
   super();
   this.state = {
     text: "",
     items: [],
     showQuestion: false,
     menuItem: "Text",
     selectMenuItem: []
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleDelete = this.handleDelete.bind(this);
   this.handleClick = this.handleClick.bind(this);
   this.handleMenuSelection = this.handleMenuSelection.bind(this);
 }

 // This method prevents form from automatically submitting. It saves the text (the current value of the input)
 // We create a newItems variable which is a concatination of the old srtate.items array and our new next(user input)
 // and then resets state to be blank and add our newItem to our items array
 handleSubmit(e) {
   e.preventDefault();
   const text = this.state.text;
   const menuItem = this.state.menuItem
   const newMenuItem = this.state.selectMenuItem.concat(menuItem);
   const newItems = this.state.items.concat(text);
   this.setState({ text: "", items: newItems, showQuestion: true, menuItem: "", selectMenuItem: newMenuItem });
 }

 // this method resets state to equal the value of the input
 handleChange(e) {
   const text = e.target.value;
   this.setState({ text: text });
 }

 //we need to pass handleDelete to the Questions so it can be used
 //we need to find the item in state.items that needs to be deleted
 //we are dropping the itemToBeDeleted from the array and resetting state to be the new array w/out the item.
 handleDelete(otherItemToDelete, itemToBeDeleted) {
   const newItems = this.state.items.filter(_item => {
     return _item != itemToBeDeleted;
   });
   const newMenuItem = this.state.selectMenuItem.filter(_menuItem => {
    return _menuItem != otherItemToDelete;
   })
   this.setState({ items: newItems, selectMenuItem: newMenuItem});

 }
 handleClick() {
   this.setState({ showQuestion: true });
 }

handleMenuSelection(e) {
   const menuItem = e.target.value;
   this.setState({ menuItem: menuItem });
}

 render() {
   return (
     <div className="container">
      <Navigation state={{questions : this.state.items, types: this.state.selectMenuItem}}/>
       {this.state.showQuestion ? (
         <form className="questionForm" onSubmit={this.handleSubmit}>
           <Questions
             items={this.state.items}
             handleDelete={this.handleDelete}
             chosenMenuItem={this.state.selectMenuItem}
           />
           <div id="questionInputDiv">
             Question:
             <input className="questionInput" onChange={this.handleChange} value={this.state.text} />
             <br></br>
             Type:
             <select className="dropDownButton"
             onChange={this.handleMenuSelection}
             >
              <option value="text">text</option>
              <option value="yes/no">yes/no</option>
              <option value="number">number</option>
             </select>
           </div>
           <button>Add Input</button>
         </form>
       ) : (
         <button id="addInput" onClick={this.handleClick}>Add Input</button>
       )}
     </div>
   );
 }
}

export default App;

