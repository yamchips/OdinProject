const fibonacci = function(input) {
    // n-th element of a fibonacci sequence
    // solution 1: recursive way, exceeds stack limit
    // if (n === 1 || n === 2) return 1;
    // return fibonacci(n - 1) + fibonacci(n - 2);
    const n = +input;
    if (n < 0) return 'OOPS';
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    // solution 2: use an array to store all values
    // let seq = [1, 1];
    // for (let i = 2; i < n; i++) {
    //     seq[i] = seq[i - 1] + seq[i - 2];
    // }
    // return seq[n - 1];
    let prev = 1, p_prev = 1, curr = 0;
    for (let i = 2; i < n; i++) {
        curr = prev + p_prev;
        [p_prev, prev, curr] = [prev, curr, 0];
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
