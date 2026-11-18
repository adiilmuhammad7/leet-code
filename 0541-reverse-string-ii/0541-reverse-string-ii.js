/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {

     let result = ""

    for (let i = 0; i < s.length; i += 2 * k) {

        let first = s.slice(i, i + k)
        let second = s.slice(i + k, i + 2 * k)

        result += first.split('').reverse().join('')
        result += second
    }

    return result
};