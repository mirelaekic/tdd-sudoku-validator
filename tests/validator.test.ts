import { expect } from 'chai';
import {Validator} from "../src/Validator";

describe("Validate sudoku", (() => {
    it("should contain 1-9 digits in array", (() => {

        const validDigits = [5, 3, 4, 6, 7, 8, 9, 1, 2];
        const invalidDigits = [5, 8, 4, 6, 7, 8, 9, 1, 2];

        expect(Validator.areDigitsComplete(validDigits)).to.equal(true)
        expect(Validator.areDigitsComplete(invalidDigits)).to.equal(false)
    }))

}))