import {Digits, Sudoku} from "../types";

export class Validator {
    public static readonly DIGIT_COUNT = 9
    public static readonly BOX_COUNT_PER_AXIS = 3
    public static readonly BOX_SIZE = 3

    static validateSudoku(sudoku: Sudoku) {
        for(let r = 0; r < this.DIGIT_COUNT; r++)
            if(!this.validateRow(sudoku, r))
                return false
        for(let c = 0; c < this.DIGIT_COUNT; c++)
            if(!this.validateColumn(sudoku, c))
                return false
        for(let r = 0; r < this.BOX_COUNT_PER_AXIS; r++)
            for(let c = 0; c < this.BOX_COUNT_PER_AXIS; c++)
                if(!this.validateBox(sudoku, r, c))
                    return false
        return true
    }

    private static validateRow(sudoku: Sudoku, rowIndex: number): Boolean {
        return this.areDigitsComplete(sudoku[rowIndex]);
    }

    private static validateColumn(sudoku: Sudoku, columnIndex: number): Boolean {
        const column = []
        for(let r = 0; r < this.DIGIT_COUNT; r++)
            column.push(sudoku[r][columnIndex])
        return this.areDigitsComplete(column);
    }

    private static validateBox(sudoku: Sudoku, boxRowIndex: number, boxColumnIndex: number): Boolean {
        const digits = []
        for(let localDigitRowIndex = 0; localDigitRowIndex < this.BOX_SIZE; localDigitRowIndex++) {
            for (let localDigitColumnIndex = 0; localDigitColumnIndex < this.BOX_SIZE; localDigitColumnIndex++) {
                const digitRowOffset = boxRowIndex * this.BOX_SIZE
                const digitColumnOffset = boxColumnIndex * this.BOX_SIZE

                const globalDigitRowIndex = localDigitRowIndex + digitRowOffset
                const globalDigitColumnIndex = localDigitColumnIndex + digitColumnOffset

                digits.push(sudoku[globalDigitRowIndex][globalDigitColumnIndex])
            }
        }
        return this.areDigitsComplete(digits);
    }

    static areDigitsComplete(digits: Digits): Boolean {
        for(let d = 1; d <= this.DIGIT_COUNT; d++)
            if(!digits.includes(d))
                return false
        return true
    }
}