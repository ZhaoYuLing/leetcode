/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // 52ms
    return parseInt(x^y).toString(2).split('1').length -1
};
