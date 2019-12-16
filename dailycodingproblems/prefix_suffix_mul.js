function prefix_suffix_sum(arr) {
    if(!arr || !Array.isArray(arr) || arr.length <= 0) {
        return [];
    }
    // 1 2 3 4 5
    // prefix:  001 001 002 006 024 120 001
    // suffix:  001 120 120 060 020 005 001
    const n = arr.length;
    const prefix = new Array(n + 2).fill(1);
    const suffix = new Array(n + 2).fill(1);
    const ans = new Array(n);
    for(let i = 1; i <= n; i++) {
        prefix[i] = prefix[i - 1] * arr[i - 1];
    }
    for(let i = n; i >= 1; i--) {
        suffix[i] = suffix[i + 1] * arr[i - 1];
    }
    for(let i = 1; i <= n; i++) {
        ans[i - 1] = prefix[i - 1] * suffix[i + 1];
    }
    return ans;
}


console.log(prefix_suffix_sum([1, 2, -1, 4, 5]));