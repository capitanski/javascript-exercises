const palindromes = function (str) {
    let arr = str.split("")
    arr = arr.filter((elem) => elem.toUpperCase() != elem.toLowerCase())
    arr = arr.map((x) => x.toLowerCase())
    arr = arr.join("")
    let reversed = arr.split("").reverse().join("")
    if (reversed == arr) return true
    return false
};

// Do not edit below this line
module.exports = palindromes;
