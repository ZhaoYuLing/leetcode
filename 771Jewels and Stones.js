/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // 56ms
    let sum = 0;
    for (i = 0; i < S.length; i++) {
        if (J.includes(S[i])) sum++;
    }
    return sum;
    
    // 84ms
    // let count = 0
    // for(let i=0;i<S.length;i++){
    //     const chartNow = S.charAt(i)
    //     if(J.includes(chartNow)) count ++
    // }
    // return count
    
    // 56ms
    // return S.split('').filter(chart => J.includes(chart)).length
    
    // 56ms
    // let count = 0
    // for(chart of S){
    //     if(J.includes(chart)) count ++
    // }
    // return count
    
    // 56ms
    // return S.split('').reduce((count, chart) => J.includes(chart) ? ++count : count, 0)
};