/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }


    let a = 1;
    let b = 2;

    for (let i = 3; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
};