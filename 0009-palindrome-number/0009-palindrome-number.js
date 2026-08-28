/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = x.toString().split("").reverse().join("")
    let rev2 = x.toString()
    return rev === rev2
    
};