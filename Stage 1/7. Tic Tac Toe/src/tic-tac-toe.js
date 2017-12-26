class TicTacToe {
    constructor() {
        this._matrix = [[null, null, null],
                        [null, null, null],
                        [null, null, null]];
    }

    null_count(){
        var nulls = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this._matrix[i][j] == null) {
                    nulls++;
                }
            }
        }
        return nulls;
    }
    getCurrentPlayerSymbol() {
        return this.null_count() % 2 == 1 ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this._matrix[rowIndex][columnIndex] !== null) {
            return this._matrix[rowIndex][columnIndex];
        } else {
            this._matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        }
    }

    isFinished() {
        return (this.isDraw() || this.getWinner() !== null);
    }

    getWinner() {
        var result = null;
        var leftDiag = this._matrix[0][0] == this._matrix[1][1]
                        && this._matrix[1][1] == this._matrix[2][2];
        var rightDiag = this._matrix[0][2] == this._matrix[1][1]
                        && this._matrix[1][1] == this._matrix[2][0];
        if (leftDiag) { return this._matrix[0][0]; }
        else if (rightDiag) { return this._matrix[1][1]; }

        for (var i = 0; i < 3; i++) {
            var hori = this._matrix[i][0] == this._matrix[i][1]
                        && this._matrix[i][0] == this._matrix[i][2]
                        && this._matrix[i][1]!== null;
            var vert = this._matrix[0][i] == this._matrix[1][i]
                        && this._matrix[1][i] == this._matrix[2][i]
                        && this._matrix[1][i]!== null;
            if (hori) { result = this._matrix[i][1]; }
            else if (vert) { result = this._matrix[1][i]; }
        }
        return result;

    }

    noMoreTurns() {
        return (this.null_count() == 0);
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        return this._matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
