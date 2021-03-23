import { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      numRows: 1,
      numCols: 1,
      selectedColor: 'red',
      isCleared: false,
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

  clearAllColor = () => {
    this.setState({ isCleared: !this.state.isCleared });
  };

  handleColorChange = (event) => {
    this.setState({ selectedColor: event.target.value });
  };

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
  };

  render() {
    let rows = [];
    let isCleared = this.state.isCleared;
    for (let i = 0; i < this.state.numRows; i++) {
      rows.push(
        <TableRow
          numCols={this.state.numCols}
          handleApplyColor={this.handleApplyColor}
          isCleared={isCleared}
        />
      );
    }

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.clearAllColor}>Clear All</button>
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
