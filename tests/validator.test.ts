import { expect } from 'chai';
import {Validator} from "../src/Validator";

describe("Validate sudoku", (() => {
    it("should contain 1-9 digits in array", (() => {

        const validDigits = [5, 3, 4, 6, 7, 8, 9, 1, 2];
        const invalidDigits = [5, 8, 4, 6, 7, 8, 9, 1, 2];

        expect(Validator.areDigitsComplete(validDigits)).to.equal(true)
        expect(Validator.areDigitsComplete(invalidDigits)).to.equal(false)
    }))
    it("should validate sudoku array",(() => {
        const validSudoku = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ]
        expect(Validator.validateSudoku(validSudoku)).to.equal(true)
    }))
}))