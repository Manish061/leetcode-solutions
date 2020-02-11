class ClassTiming {
    start; end;
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

function min_rooms_required(list_of_class_timings) {
    if (!list_of_class_timings || !Array.isArray(list_of_class_timings) ||
        list_of_class_timings.length <= 0) {
        return -1;
    }
    const startArr = list_of_class_timings.map(a => [a.start, 1]);
    const endArr = list_of_class_timings.map(a => [a.end, -1]);
    const newArr = [...startArr, ...endArr].sort((a, b) => {
        return a[0] < b[0] ? -1 : a[0] === b[0] ? 0 : 1
    });
    let rooms = 0;
    return newArr.reduce((prev, curr) => {
        rooms += curr[1];
        return Math.max(prev, rooms);
    }, 0);
}

function main() {
    const list = [
        new ClassTiming(30, 75),
        new ClassTiming(0, 50),
        new ClassTiming(60, 150)
    ];
    console.log(min_rooms_required(list));
}

main();