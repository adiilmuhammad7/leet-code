/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    let count = {}

    // Count each character
    for (let char of s) {
        if (count[char]) {
            count[char]++
        } else {
            count[char] = 1
        }
    }

    let answer = 0
    let hasOdd = false

    // Use pairs
    for (let char in count) {

        answer = answer + count[char] - (count[char] % 2)

        if (count[char] % 2 === 1) {
            hasOdd = true
        }
    }

    // One odd character can be placed in the middle
    if (hasOdd) {
        answer++
    }

    return answer
};