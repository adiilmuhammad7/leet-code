/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

let uniquevalue = new Set(nums)
return nums.length !== uniquevalue.size
    
};