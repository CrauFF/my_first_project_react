import React from 'react';
import Square from './Square'
import './../App.css'



class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderRows(rowsCount) {
    let index = 0;
    const arr = Array.from(Array(rowsCount), (_, i) => i);
    const result = arr.map(() => (
        <div className="board-row">
          {arr.map(()=> this.renderSquare(index++))}
        </div>
    ));
    return result;
  }



  render() {
    return (
      <div>
        {this.renderRows(this.props.fieldSize)}
      </div>);
  }
}

export default Board;