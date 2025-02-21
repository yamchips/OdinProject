const sumAll = function(num1, num2) {
    // check validity of inputs
    if (typeof num1 !== 'number' || typeof num2 !== 'number' ||Math.floor(num1) != num1 || Math.floor(num2) != num2) {
        return 'ERROR';
    }
    
    let sum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
