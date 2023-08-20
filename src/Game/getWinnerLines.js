function getWinnerLines(fieldSize)
{
    let winnerLines = [];
    let winLineSize = fieldSize == 3 ? 3 : 5;
    winnerLines = winnerLines.concat(getHorLines(fieldSize, winLineSize));
    winnerLines = winnerLines.concat(getVerLines(fieldSize, winLineSize));
    winnerLines = winnerLines.concat(getDiagLines(fieldSize, winLineSize));

    return winnerLines;
}

function getHorLines(fieldSize, winLineSize)
{
    const winnerLines = []
    for (let i = 0; i < fieldSize; i++) {
        for (let j = 0; j < fieldSize - (winLineSize - 1) ; j++) {
            let line = Array.from(Array(winLineSize), (_, index) =>  i * fieldSize + j + index);
            winnerLines.push(line)          
        }
    }

    return winnerLines;
}

function getVerLines(fieldSize, winLineSize) {
    const winnerLines = [];
    for (let i = 0; i < fieldSize - winLineSize + 1; i++) {
        for (let j = 0; j < fieldSize; j++) {
            let line = Array.from(Array(winLineSize), (_, index) => (i + index) * fieldSize + j);
            winnerLines.push(line);
        }
    }
    return winnerLines;
}

function getDiagLines(fieldSize, winLineSize) {
    const winnerLines = [];
    
    // Main diagonals
    for (let i = 0; i < fieldSize - winLineSize + 1; i++) {
        for (let j = 0; j < fieldSize - winLineSize + 1; j++) {
            let line = Array.from(Array(winLineSize), (_, index) => (i + index) * fieldSize + j + index);
            winnerLines.push(line);
        }
    }

    // Side diagonals
    for (let i = 0; i < fieldSize - winLineSize + 1; i++) {
        for (let j = winLineSize - 1; j < fieldSize; j++) {
            let line = Array.from(Array(winLineSize), (_, index) => (i + index) * fieldSize + j - index);
            winnerLines.push(line);
        }
    }
    
    return winnerLines;
}

export default getWinnerLines;
