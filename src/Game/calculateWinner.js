import getLines from './getWinnerLines'


function calculateWinner(squares, winLines) {
    if(winLines.length == 8) {
        for (let i = 0; i < winLines.length; i++) {
            const [a, b, c] = winLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    else {
        for (let i = 0; i < winLines.length; i++) {
            const [a, b, c, d, e] = winLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
                return squares[a];
            }
        }
        return null;
    }
}

export default calculateWinner;