/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
let result = []
for(let num of nums){
    let arrs = String(num).split('')
    for(let arr of arrs){
        result.push(Number(arr))
    }
}
return result
    
};