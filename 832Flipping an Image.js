/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    // 64ms
    return A.map(row => row.reverse()).map(row => row.map(b => b === 1 ? 0 : 1 ))
};