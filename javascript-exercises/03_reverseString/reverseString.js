const reverseString = function(string) {
    let len = string.length;
    let res = '';
    for (let i = len - 1; i >= 0; i--) {
        res += string.at(i);
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
