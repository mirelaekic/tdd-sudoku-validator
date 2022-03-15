import {Digits} from "../types";

export class Validator {
    public static readonly DIGIT_COUNT = 9

    static validateSudoku() {

    }

    static areDigitsComplete(digits: Digits): Boolean {
        for(let d = 1; d <= this.DIGIT_COUNT; d++)
            if(!digits.includes(d))
                return false
        return true
    }
}