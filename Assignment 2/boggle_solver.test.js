//worked with deante
const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');
 
/** Lowercases a string array in-place. (Used for case-insensitive string array
*  matching).
* @param {string[]} stringArray - String array to be lowercase.
*/
function lowercaseStringArray(stringArray) {
 for (let i = 0; i < stringArray.length; i++)
   stringArray[i] = stringArray[i].toLowerCase();
}
 
describe("Boggle Solver tests suite:", () => {
 describe("Normal input", () => {
   test("2x2 case", () => {
     let grid = [
       ["D", "E"],
       ["O", "N"],
     ];
     let dictionary = ["DEO", "EON", "ONE", "DN"];
     let solutions = boggle_solver.findAllSolutions(grid, dictionary);
     let expected = ["DEO", "EON", "ONE"];
     lowercaseStringArray(solutions);
     lowercaseStringArray(expected);
     expect(solutions.sort()).toEqual(expected.sort());
   });
 
   test("3x3 case", () => {
     let grid = [
       ["A", "B", "C"],
       ["E", "I", "K"],
       ["F", "L", "M"],
     ];
     let dictionary = ["ABE", "BEIC", "KILF", "CUT"];
     let solutions = boggle_solver.findAllSolutions(grid, dictionary);
     let expected = ["ABE", "BEIC", "KILF"];
     lowercaseStringArray(solutions);
     lowercaseStringArray(expected);
     expect(solutions.sort()).toEqual(expected.sort());
   });
 
   test("4x4 case", () => {
     let grid = [
       ["A", "D", "T", "P"],
       ["J", "O", "P", "W"],
       ["M", "I", "W", "L"],
       ["A", "V", "B", "X"],
     ];
     let dictionary = ["AOWXL", "PPTD", "MOT", "MAM"];
     let solutions = boggle_solver.findAllSolutions(grid, dictionary);
     let expected = ["AOWXL", "PPTD", "MOT"];
     lowercaseStringArray(solutions);
     lowercaseStringArray(expected);
     expect(solutions.sort()).toEqual(expected.sort());
   });
 
   test("5x5 case", () => {
     let grid = [
       ["A", "B", "C", "D", "E"],
       ["J", "I", "H", "G", "F"],
       ["K", "L", "M", "N", "O"],
       ["T", "S", "R", "Q", "P"],
       ["U", "V", "W", "X", "Y"],
     ];
     let dictionary = ["ABILSV", "EFONM", "XYHD", "TKLMR", "XQNG", "XYZ"];
     let solutions = boggle_solver.findAllSolutions(grid, dictionary);
     let expected = ["ABILSV", "EFONM", "TKLMR", "XQNG"];
     lowercaseStringArray(solutions);
     lowercaseStringArray(expected);
     expect(solutions.sort()).toEqual(expected.sort());
   });
 });
 
 describe("Problem contraints", () => {
   // Cases such as Qu
   test("QU case", () => {
     const grid = [
       ["QU", "A", "K"],
       ["S", "B", "E"],
       ["L", "O", "W"],
     ];
     const dictionary = ["QUAKE", "BAKE", "SLOW", "BO"];
     const expected = ["QUAKE", "BAKE", "SLOW"];
     let solutions = boggle_solver.findAllSolutions(grid, dictionary);
     lowercaseStringArray(solutions);
     lowercaseStringArray(expected);
     expect(solutions.sort()).toEqual(expected.sort());
   });
 
   test("Empty case", () => {
     const grid = [[""], [""]];
     const dictionary = [];
     const expected = [];
     let solutions = boggle_solver.findAllSolutions(grid, dictionary);
     lowercaseStringArray(solutions);
     lowercaseStringArray(expected);
     expect(solutions.sort()).toEqual(expected.sort());
   });
 
   test("NxM case", () => {
     let grid = [["A", "B"], ["C"]];
     let dictionary = ["AB", "ABC", "AC"];
     let solutions = boggle_solver.findAllSolutions(grid, dictionary);
     let expected = [];
     lowercaseStringArray(solutions);
     lowercaseStringArray(expected);
     expect(solutions.sort()).toEqual(expected.sort());
   });
 
   test("Duplicate letters case", () => {
     let grid = [
       ["A", "B"],
       ["B", "C"],
     ];
     let dictionary = ["ABB", "ABC", "AC"];
     let solutions = boggle_solver.findAllSolutions(grid, dictionary);
     let expected = ["ABB", "ABC"];
     lowercaseStringArray(solutions);
     lowercaseStringArray(expected);
     expect(solutions.sort()).toEqual(expected.sort());
   });
 });
 
 describe("Input edge cases", () => {
   // Example Test using Jess
   test("Dictionary is empty", () => {
     // (Edge case) Since there are no possible solutiona, it should return an
     // empty list.
     const grid = [
       ["A", "B", "C", "D"],
       ["E", "F", "G", "H"],
       ["I", "J", "K", "L"],
       ["M", "N", "O", "P"],
     ];
     const dictionary = [];
     const expected = [];
 
     let solutions = boggle_solver.findAllSolutions(grid, dictionary);
 
     // Lowercasing for case-insensitive string array matching.
     lowercaseStringArray(solutions);
     lowercaseStringArray(expected);
     expect(solutions.sort()).toEqual(expected.sort());
   });
 });
});
 
 
 
