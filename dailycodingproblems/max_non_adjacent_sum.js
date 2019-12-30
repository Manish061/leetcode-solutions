function max_non_adjacent_sum_non_linear(arr) {
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

function max_non_adjacent_sum_linear(arr) {
    if (!arr || !Array.isArray(arr) || arr.length <= 0) {
        return 0;
    }
    const n = arr.length;
    let inclusive = arr[0];
    let exclusive = 0;
    let temp;
    let i = 1;
    while (i < n) {
        temp = inclusive > exclusive ? inclusive : exclusive;
        inclusive = exclusive + arr[i];
        exclusive = temp;
        i++;
    }
    return inclusive > exclusive ? inclusive : exclusive;
}


// console.log(max_non_adjacent_sum_non_linear([5, 1, 1, 5]));
// console.log(max_non_adjacent_sum_non_linear([2, 4, 6, 2, 5]));
// console.log(max_non_adjacent_sum_non_linear([5, 5, 10, 100, 10, 5]));


console.log(max_non_adjacent_sum_linear([5, 1, 1, 5]));
console.log(max_non_adjacent_sum_linear([2, 4, 6, 2, 5]));
console.log(max_non_adjacent_sum_linear([5, 5, 10, 100, 10, 5]));