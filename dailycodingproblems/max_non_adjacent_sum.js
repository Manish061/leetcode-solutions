function max_non_adjacent_sum(arr) {
    if (!arr || !Array.isArray(arr) || arr.length <= 0) {
        return 0;
    }

    const n = arr.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = arr[i - 1];
        for (let j = i - 2; j >= 0; j--) {
            dp[i] = Math.max(dp[i], dp[j] + arr[i - 1]);
        }
    }
    return dp[n];
}

console.log(max_non_adjacent_sum([5, 1, 1, 5]));
console.log(max_non_adjacent_sum([2, 4, 6, 2, 5]));