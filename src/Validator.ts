import {Digits, Sudoku} from "../types";

export class Validator {
    public static readonly DIGIT_COUNT = 9

    static validateSudoku(sudoku: Sudoku) {
        for(let r = 0; r < this.DIGIT_COUNT; r++)
            if(!this.validateRow(sudoku, r))
                return false
        return true
    }

    static validateRow(sudoku: Sudoku, rowIndex: number): Boolean {
        return this.areDigitsComplete(sudoku[rowIndex]);
    }

    static areDigitsComplete(digits: Digits): Boolean {
        for(let d = 1; d <= this.DIGIT_COUNT; d++)
            if(!digits.includes(d))
                return false
        return true
    }
}