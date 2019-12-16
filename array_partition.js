function array_partition(arr) {
    if (!arr || !Array.isArray(arr) || arr.length <= 0) {
        return false;
    }
    const n = arr.length;
    
    const sum = arr.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    const half = Math.floor(sum / 2);

    const dp = new Array(sum + 1);
    for (let i = 0; i <= sum; i++) {
        dp[i] = new Array(n + 1).fill(false);
        for (let j = 0; j <= n; j++) {
            dp[0][i] = true;
        }
    }

    for (let i = 1; i <= sum; i++) {
        for (let j = 1; j <= n; j++) {
            if (arr[j - 1] > i) {
                dp[i][j] = dp[i][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1] || dp[i - arr[j - 1]][j - 1];
            }
        }
    }

    return half === sum - half && dp[half][n];
}

console.log(array_partition([2, 3, 1]));
console.log(array_partition([2, 3, 2]));
console.log(array_partition([1, 3, 2]));