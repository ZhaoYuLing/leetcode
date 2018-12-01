/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    // 48ms
    let result = ''
    for(c of str){
        const charCode = c.charCodeAt(0)
        result += (charCode >=65 && charCode <=90) ? `${String.fromCharCode(charCode+32)}` : `${c}`
    }
    return result
};
