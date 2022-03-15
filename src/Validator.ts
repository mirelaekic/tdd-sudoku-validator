import {Digits, Sudoku} from "../types";

export class Validator {
    public static readonly DIGIT_COUNT = 9
    public static readonly BOX_COUNT_PER_AXIS = 3
    public static readonly DIGIT_COUNT_PER_AXIS = 3

    static validateSudoku(sudoku: Sudoku) {
        for(let r = 0; r < this.DIGIT_COUNT; r++)
            if(!this.validateRow(sudoku, r))
                return false
        for(let c = 0; c < this.DIGIT_COUNT; c++)
            if(!this.validateColumn(sudoku, c))
                return false
        for(let r = 0; r < this.BOX_COUNT_PER_AXIS; r++)
            for(let c = 0; c < this.BOX_COUNT_PER_AXIS; c++)
                if(!this.validateColumn(sudoku, c))
                    return false
        return true
    }

    static validateRow(sudoku: Sudoku, rowIndex: number): Boolean {
        return this.areDigitsComplete(sudoku[rowIndex]);
    }

    static validateColumn(sudoku: Sudoku, columnIndex: number): Boolean {
        const column = []
        for(let r = 0; r < this.DIGIT_COUNT; r++)
            column.push(sudoku[r][columnIndex])
        return this.areDigitsComplete(column);
    }

    static validateBox(sudoku: Sudoku, rowIndex: number, columnIndex: number): Boolean {
        const column = []
        for(let r = 0; r < this.DIGIT_COUNT; r++)
            column.push(sudoku[r][columnIndex])
        return this.areDigitsComplete(column);
    }

    static areDigitsComplete(digits: Digits): Boolean {
        for(let d = 1; d <= this.DIGIT_COUNT; d++)
            if(!digits.includes(d))
                return false
        return true
    }
}