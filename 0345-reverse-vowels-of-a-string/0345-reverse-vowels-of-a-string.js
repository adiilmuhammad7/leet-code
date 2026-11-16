/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
 let vowels = "AEIOUaeiou"

    let check = s.split("")

    let test = check.filter(function(char) {
        return vowels.includes(char)
    })

    let testreverse = test.reverse()

    let index = 0

    for (let i = 0; i < check.length; i++) {
        if (vowels.includes(check[i])) {
            check[i] = testreverse[index]
            index++
        }
    }

    return check.join("")

    
};