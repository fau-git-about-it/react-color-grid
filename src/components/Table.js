import { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      numRows: 1,
      numCols: 1,
      selectedColor: "red",
      isCleared: false, //Adding a boolean to the state which will be used later on and constantly changed
    };
  }

  addRow = () => {
    this.setState((state) => {
      return { numRows: state.numRows + 1 };
    });
  };

  addColumn = () => {
    this.setState((state) => {
      return { numCols: state.numCols + 1 };
    });
  };

  deleteRow = () => {
    if (this.state.numRows === 0) { //If there are no rows in the table
      alert("You need to add a row!"); //Alert the user
      return 0;
    } else { //Otherwise
      this.setState({ numRows: this.state.numRows - 1 }); //Simply decrement numRows
    }
  };

  deleteColumn = () => {
    if (this.state.numCols === 0) { //If there are no columns in the table
      alert("You need to add a column!"); //Alert the user
      return 0;
    } else { //Otherwise
      this.setState({ numCols: this.state.numCols - 1 }); //Decrement numCols
    }
  };

  clearAllColor = () => {
    this.setState({ isCleared: !this.state.isCleared }); //Every time this function is called it changes isCleared to the opposite boolean value.
  };

  handleColorChange = (event) => {
    this.setState({ selectedColor: event.target.value }); //This function takes in an event's value and assigns it to the selected color which can later be used to change the square colors.
  };

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor; //This uses the CSS property background color and assigns the color that is currently selected to it
  };

  fillAll = () => {
    const Squares = document.getElementsByTagName("td");
    for (let i = 0; i < Squares.length; i++) { //Loop through the squares in the table
      Squares[i].style.backgroundColor = this.state.selectedColor; //Fill all of them with the current selected color
    }
  };

  fillAllUncolored = () => {
    const Squares = document.getElementsByTagName("td");
    for (let i = 0; i < Squares.length; i++) { //Loop through the squares in the table
      if ( //If they are uncolored
        Squares[i].style.backgroundColor == "white" ||
        Squares[i].style.backgroundColor == ""
      ) {
        Squares[i].style.backgroundColor = this.state.selectedColor; //color them with the currently selected color
      }
    }
  };

  render() {
    let rows = [];
    let isCleared = this.state.isCleared;
    for (let i = 0; i < this.state.numRows; i++) {
      rows.push(
        <TableRow
          numCols={this.state.numCols} //Passes down the number of columns
          handleApplyColor={this.handleApplyColor} //Passes down an event handler
          isCleared={isCleared} //Passes down the boolean isCleared
        />
      );
    }

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.deleteRow}>Delete Row</button>
        <button onClick={this.deleteColumn}>Delete Column</button>
        <button onClick={this.clearAllColor}>Clear All</button>
        <button onClick={this.fillAll}> Fill All </button>
        <button onClick={this.fillAllUncolored}> Fill All Uncolored</button>
        <select onChange={this.handleColorChange}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
        <table>{rows}</table>
      </div>
    );
  }
}

export default Table;
