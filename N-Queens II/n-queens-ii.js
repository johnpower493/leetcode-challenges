// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

 

// Example 1:


// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
// Example 2:

// Input: n = 1
// Output: 1
 

// Constraints:

// 1 <= n <= 9

/**
 * @param {number} n
 * @return {number}
 */
 var totalNQueens = function(n) {
    let res = 0;
    let col = new Array(n).fill(0);
    let pie = new Array(2*n-1).fill(0);
    let nah = new Array(2*n-1).fill(0);
    let dfs = (row) => {
        if(row === n){
            res++;
            return;
        }
        for(let i = 0; i < n; i++){
            if(col[i] === 0 && pie[row+i] === 0 && nah[row-i+n-1] === 0){
                col[i] = 1;
                pie[row+i] = 1;
                nah[row-i+n-1] = 1;
                dfs(row+1);
                col[i] = 0;
                pie[row+i] = 0;
                nah[row-i+n-1] = 0;
            }
        }
    }
    dfs(0);
    return res;

    
};

console.log(totalNQueens(4));
