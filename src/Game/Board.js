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
  // getSquaresArray(n) {
  //   let squares = Array(n);
  //   for (let i; i < squares.length; i++) {
  //     squares[i] = this.renderSquare(i);
  //   }
  //   return squares;
  // }

  // renderRows(rowsCount) {
  //   const rows = [];
  //   const squares = this.getSquaresArray(rowsCount * rowsCount);
  
  //   for (let i = 0; i < rowsCount; i++) {
  //     const row = (
  //       <div key={i} className="board-row">
  //         {squares.slice(i * rowsCount, (i + 1) * rowsCount)}
  //       </div>
  //     );
  //     rows.push(row);
  //   }
  
  //   return rows;
  // }

  render() {
    return (
      <div>
        {/* {this.renderRows(3)} */}
        <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
      </div>
    );
  }
}

export default Board;