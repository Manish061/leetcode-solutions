/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */

const modulo = function (num) {
    const mod = 1000000007;
    num = parseInt(num, 10);
    if (num < 0) {
        return parseInt(num + mod, 10);
    } else if (num >= mod) {
        return parseInt(num - mod, 10);
    } else {
        return num;
    }
}

const numRollsToTarget = function (d, f, target) {
    const memo = new Array(d + 1);
    for (let i = 0; i <= d; i++) {
        memo[i] = new Array(target + 1).fill(0);
    }
    // return numRollsToTargetUtil(d, f, target, memo);
    for (let i = 1; i <= target; i++) {
        if (f >= i)
            memo[1][i] = 1;
    }
    for (let i = 1; i <= d; i++) {
        for (let j = 1; j <= target; j++) {
            for (let k = 1; k <= f; k++) {
                if (k <= j) {
                    memo[i][j] = modulo(
                        memo[i][j] +
                        memo[i - 1][j - k]
                    )
                }
            }
        }
    }
    return memo[d][target];
}

// const numRollsToTargetUtil = function (d, f, target, memo) {

//     if (memo[d][target] > 0) {
//         return memo[d][target];
//     }

//     if (d === 1) {
//         if (f >= target) {
//             return 1;
//         } else {
//             return 0;
//         }
//     }

//     for (let i = 1; i <= f; ++i) {
//         if (i <= target) {
//             memo[d][target] = modulo(
//                 memo[d][target] +
//                 modulo(
//                     numRollsToTargetUtil(d - 1, f, target - i, memo)
//                 )
//             );
//         }
//     }
//     return memo[d][target];

// };

console.log(numRollsToTarget(1, 6, 3));
console.log(numRollsToTarget(2, 6, 7));
console.log(numRollsToTarget(2, 5, 10));
console.log(numRollsToTarget(1, 2, 3));
console.log(numRollsToTarget(30, 30, 500));
console.log(numRollsToTarget(6, 6, 1));