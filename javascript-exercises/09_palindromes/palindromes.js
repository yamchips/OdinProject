const palindromes = function (str) {
    // remove all punctuations and word breaks, all to lower case
    let newStr = str.replace(/[^\w]/g, '').toLowerCase();
    // two pointers
    let left = 0, right = newStr.length - 1;
    while (left < right) {
        if (newStr.charAt(left) !== newStr.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
