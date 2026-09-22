/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let num of nums) {
        let count = 0;

        for (let value of nums) {
            if (num === value) {
                count++;
            }
        }

        if (count === 1) {
            return num;
        }
    }
    
};