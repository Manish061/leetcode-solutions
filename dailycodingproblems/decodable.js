
// 111
// aaa, ak, ka
function numWaysToDecodeUtil(str) {
    if(typeof str !== 'string') {
        return 0;
    }
    
    const len = str.length;
    if (!len) {
        return 1;
    }

    const not_included = numWaysToDecodeUtil(str.slice(1));
    let included = 0;
    const numString = str.substr(0, 2);
    if (str.length >= 2 && +numString >= 1 && +numString <= 26) {
        included = numWaysToDecodeUtil(str.slice(2));
    }
    return not_included + included;
}

function numWaysToDecode(str) {
    if (typeof str !== 'string') {
        return 0;
    }

    const n = str.length;
    const strArr = Array.from(str);
    const numWaysToDecodeCounter = new Array(n + 1).fill(0);
    let numString = '';

    numWaysToDecodeCounter[0] = 1;
    numWaysToDecodeCounter[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        numWaysToDecodeCounter[i] = numWaysToDecodeCounter[i - 1];
        numString = strArr[i - 2] + strArr[i - 1];
        if(+numString >= 1 && +numString <= 26) {
            numWaysToDecodeCounter[i] += numWaysToDecodeCounter[i - 2];
        }
    }
    return numWaysToDecodeCounter[n];
}

console.log(numWaysToDecode('111'));
console.log(numWaysToDecode('32'));
console.log(numWaysToDecode('11'));
console.log(numWaysToDecode('1'));
console.log(numWaysToDecode(''));
console.log(numWaysToDecode('111111'));
console.log(numWaysToDecode('12343'));
console.log(numWaysToDecode('121'));
