/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];

for (let num = 1; num <= n; num++) {

    if (num % 3 === 0 && num % 5 === 0) {
        result.push("FizzBuzz");
    }
    else if (num % 3 === 0) {
        result.push("Fizz");
    }
    else if (num % 5 === 0) {
        result.push("Buzz");
    }
    else {
        result.push(String(num));
    }
}

return result;
};