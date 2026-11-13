/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let total = nums.reduce(function(sum,num){
    return sum + num
},0)

let total2 = 0 

for(let num of nums){
    let digits = String(num).split('')
    for(let digit of digits){
        total2 = total2 + Number(digit)
        
    }
   
}
let result = total - total2
return result

    
};