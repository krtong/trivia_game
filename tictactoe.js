class TicTacToe {
    constructor() {
        this.board = [
            [' ', ' ', ' ', ],
            [' ', ' ', ' ', ],
            [' ', ' ', ' ', ],
        ];
        this.currentPlayer = 'x';
        this.score = {
            'x': 0,
            'o': 0,
        };
        this.autoGame = false;
        this.win = false;
        this.turnCount = 0;
    };
    playerMove(row, col) {
        this.board[row][col] = this.currentPlayer;
        this.turnCount++;
        this.checkRow();
        this.checkColumn();
        this.checkDiagonal();
        this.checkDraw();
        if (!this.win) {
            this.changePlayer();
        }
    };
    changePlayer() {
        if (this.currentPlayer === 'x') {
            this.currentPlayer = 'o';
        } else {
            this.currentPlayer = 'x';
        }
    };
    checkRow() {
        if (!this.win) {
            for (let i = 0; i < 3; i++) {
                if (this.board[i][0] !== ' ') {
                    if (this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]) {
                        this.handleGameWin();
                    }
                }
            }
        }
    };
    checkColumn() {
        if (!this.win) {
            for (let i = 0; i < 3; i++) {
                if (this.board[0][i] !== ' ') {
                    if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]) {
                        this.handleGameWin();
                    }
                }
            }
        }
    }
    checkDiagonal() {
        if (!this.win) {
            if (this.board[1][1] !== '') {
                if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
                    this.handleGameWin(); 
                } else if (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) {
                    this.handleGameWin(); 
                }
            }
        }
    }
    checkDraw() {
        if (!this.win && this.turnCount === 9) {
            this.handleGameDraw();
        }
    }
    automaticGame() {
        if (this.autoGame) { 
            let pos1 = this.randomPosition();
            let pos2 = this.randomPosition();
            while (this.board[pos1][pos2] !== ' ') {
                pos1 = this.randomPosition();
                pos2 = this.randomPosition();
            }
            this.playerMove(pos1, pos2);
        }
    }
    randomPosition() {
        return Math.floor(Math.random() * 3);
    }
    handleGameWin() {
        this.win = true;
    }
    handleGameDraw() {
        this.handleGameOver();
    }
    handleGameOver() {
    }
};