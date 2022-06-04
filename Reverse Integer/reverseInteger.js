// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let result = 0;
    let sign = 1;
    if (x < 0) {
        sign = -1;
    }
    x = Math.abs(x);
    while (x > 0) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    result *= sign;
    if (result < -2147483648 || result > 2147483647) {
        return 0;
    }
    return result;
    
};

// print the reverse of the number
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
console.log(reverse(-2147483648));
