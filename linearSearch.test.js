const linearSearch = require("./linearSearch");

describe("linearSearch",()=>{
    it('return the index of the target if in the array', () => {
        const inputArr = [1,2,3,4,5];
        const inputTarget = 2;
        const expected = 1;
        const output = linearSearch(inputArr,inputTarget);
        expect(output).toBe(expected)
    });
    it('return the index of the first matching target ', () => {
        const inputArr = ["apple","orange","banana","grapes"];
        const inputTarget = "banana";
        const expected = 2;
        const output = linearSearch(["apple","orange","banana","grapes"],"banana");
        expect(output).toBe(expected)
    });
    it('return -1 if not in the array', () => {
        const inputArr = [12,15,23,23,100];
        const inputTarget = 101;
        const expected = -1;
        const output = linearSearch(inputArr,inputTarget);
        expect(output).toBe(expected)
    });
})