
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (i === arr.length - 1) {
            result.push(-1);
        } else {
            let max = arr[i + 1];

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > max) {
                    max = arr[j];
                }
            }

            result.push(max);
        }
    }

    return result;
};
