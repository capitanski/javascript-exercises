const removeFromArray = function (arr, ...args) {
    for (const num of args) {
        const result = arr.findIndex((el) => el === num)
        if (result >= 0) arr.splice(result, 1)
    }


    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
