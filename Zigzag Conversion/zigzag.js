/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
// create a 2D array for the zigzag
    let zigzag = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        zigzag[i] = [];
    }
// place each character in the zigzag into the correct row
    let row = 0;
    let direction = 1;
    for (let i = 0; i < s.length; i++) {
        zigzag[row].push(s[i]);
        if (row === 0) {
            direction = 1;
        } else if (row === numRows - 1) {
            direction = -1;
        }
        row += direction;
        // if numrows > s.length, then we need to add empty strings to the end of the zigzag
        if (row >= numRows) {
            row = numRows - 1;
        }
        
    }
// join the rows together

    let result = "";
    for (let i = 0; i < numRows; i++) {
        result += zigzag[i].join("");
    }
    return result;
}

// print the zigzag
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
console.log(convert("ABC", 2));
console.log(convert("ABCD", 3));
console.log(convert("AB", 1));