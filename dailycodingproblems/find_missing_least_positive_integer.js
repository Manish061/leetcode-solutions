function findMissingLeastPositiveInteger(arr) {
    if (!arr || !Array.isArray(arr) || !arr.length) {
        return -1;
    }

    const n = arr.length;
    // 2, 3, -7, 6, 8, 1, -10, 15
    // -7 3 2 6 8 1 -10 15, j = 1,
    // -7 -10 2 6 8 1 3 15, j = 2

    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= 0) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }

    const arrA = arr.filter(item => item > 0);
    const size = arrA.length;
    let id;

    for (let i = 0; i < size; i++) {
        id = Math.abs(arrA[i]) - 1;
        if (id < size && arrA[id] > 0) {
            arrA[id] = -arrA[id];
        }
    }

    for (let i = 0; i < size; i++) {
        if (arrA[i] > 0) {
            return i + 1;
        }
    }
    return size + 1;

}

console.log(findMissingLeastPositiveInteger([2, 3, 7, 6, 8, -1, -10, 15]));
console.log(findMissingLeastPositiveInteger([2, 3, -7, 6, 8, 1, -10, 15]));
console.log(findMissingLeastPositiveInteger([1, 1, 0, -1, -2]));