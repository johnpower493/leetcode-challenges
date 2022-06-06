// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true;
    let str = x.toString();
    let len = str.length;
    let mid = Math.floor(len/2);
    for(let i = 0; i < mid; i++){
        if(str[i] !== str[len-1-i]) return false;
    }
    return true;

};

// print the result
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(0));
console.log(isPalindrome(1));
console.log(isPalindrome(11));
console.log(isPalindrome(111));
console.log(isPalindrome(1111));
console.log(isPalindrome(11111));
