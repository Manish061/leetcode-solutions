function find_edit_path(dp, s, t, sLength, tLength) {
    while (sLength && tLength) {
        if (s[sLength - 1] === t[tLength - 1]) {
            sLength--;
            tLength--;
        } else if (dp[sLength][tLength] === dp[sLength - 1][tLength - 1] + 1) {
            console.log(`Replace ${s[sLength - 1]} to ${t[tLength - 1]}`);
            sLength--;
            tLength--;
        } else if (dp[sLength][tLength] === dp[sLength - 1][tLength] + 1) {
            console.log(`Delete ${s[sLength - 1]}`);
            sLength--;
        } else if (dp[sLength][tLength] === dp[sLength][tLength - 1] + 1) {
            console.log(`Insert ${t[tLength - 1]}`);
            tLength --;
        }
    }
}
function edit_distance(s, t) {
    if (typeof s !== 'string' || typeof t !== 'string') {
        return Number.MAX_SAFE_INTEGER;
    }
    const sLength = s.length;
    const tLength = t.length;
    const edit_distance_matrix = new Array(sLength + 1);
    for (let index = 0; index <= sLength; index++) {
        edit_distance_matrix[index] = new Array(tLength + 1).fill(Number.MAX_SAFE_INTEGER);
    }

    for (let i = 0; i <= sLength; i++) {
        for (let j = 0; j <= tLength; j++) {
            if (i === 0) {
                edit_distance_matrix[i][j] = j;
            } else if (j === 0) {
                edit_distance_matrix[i][j] = i;
            } else if (s[i - 1] === t[j - 1]) {
                edit_distance_matrix[i][j] = edit_distance_matrix[i - 1][j - 1];
            } else {
                edit_distance_matrix[i][j] = 1 + Math.min(
                    edit_distance_matrix[i - 1][j - 1],
                    edit_distance_matrix[i][j - 1],
                    edit_distance_matrix[i - 1][j]
                );
            }
        }
    }
    find_edit_path(edit_distance_matrix, s, t, sLength, tLength);
    return edit_distance_matrix[sLength][tLength];
}

console.log(edit_distance('kitten', 'sitting'));