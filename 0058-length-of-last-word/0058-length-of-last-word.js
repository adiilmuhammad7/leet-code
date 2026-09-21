/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result = s.trim().split(" ")

    let lastWord = result[result.length - 1]

    return lastWord.length
};