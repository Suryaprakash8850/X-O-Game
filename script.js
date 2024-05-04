let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function playerMove(cellIndex) {
    if (gameBoard[cellIndex] === "") {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById("status").innerText = `${currentPlayer} wins!`;
            disableBoard();
            return;
        }
    }

    if (!gameBoard.includes("")) {
        document.getElementById("status").innerText = "It's a draw!";
    }
}

function disableBoard() {
    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.onclick = null;
    }
}

function resetGame() {
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerText = "";
    }
    document.getElementById("status").innerText = "";
}
