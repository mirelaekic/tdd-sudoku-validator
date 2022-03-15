import { expect } from 'chai';
import {Validator} from "../src/Validator";

describe("Validate sudoku", (() => {
    it("should contain 1-9 digits in array", (() => {
        const mockArray = [5, 3, 4, 6, 7, 8, 9, 1, 2];
        expect(Validator.areDigitsComplete(mockArray)).to.equal(true)
    }))
}))