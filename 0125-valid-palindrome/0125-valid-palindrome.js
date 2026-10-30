/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        let leftCode = s.charCodeAt(left);
        let rightCode = s.charCodeAt(right);

        let leftValid =
            (leftCode >= 97 && leftCode <= 122) ||
            (leftCode >= 48 && leftCode <= 57);

        let rightValid =
            (rightCode >= 97 && rightCode <= 122) ||
            (rightCode >= 48 && rightCode <= 57);

        if (!leftValid) {
            left++;
        } else if (!rightValid) {
            right--;
        } else {
            if (s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }
    }

    return true;
};
    