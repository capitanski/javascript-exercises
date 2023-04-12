const fibonacci = function (num) {
    if (num < 0) return 'OOPS'
    num = parseInt(num)
    let arr = []
    arr[0] = 1
    arr[1] = 1
    arr[2] = 2
    for (let i = 2; i < num; i++) {
        arr[i + 1] = arr[i] + arr[i - 1]
    }
    return arr[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;
