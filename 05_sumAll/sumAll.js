const sumAll = function (...args) {
    let sum = 0;
    let numbers = args.sort()
    for (const arg of args) {
        if (arg < 0) return 'ERROR'
        if (typeof arg != 'number') return 'ERROR'
    }
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
