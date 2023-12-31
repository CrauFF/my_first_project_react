import React from 'react'
import Board from "./Board";
import './../App.css'
import calculateWinner from './calculateWinner';
import getLines from './getWinnerLines'


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winnerLine: getLines(props.fieldSize),
            fieldSize: props.fieldSize,
            history: [{
                squares: Array(props.fieldSize ** 2).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares, this.state.winnerLine) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares, this.state.winnerLine);

        const moves = history.map((step, move) => {
            const dev = move ? `Go to move #${move}`: `Go to gamestart`;
            return(
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{dev}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        fieldSize={this.state.fieldSize}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;