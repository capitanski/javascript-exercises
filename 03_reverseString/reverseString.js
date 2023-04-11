const reverseString = function (str) {
    let rev = str.split("")
    rev = rev.reverse()
    rev = rev.join('')
    return rev
};

// Do not edit below this line
module.exports = reverseString;
