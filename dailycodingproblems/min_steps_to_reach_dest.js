class Cell {
    x; y; distance;
    constructor(x, y, distance) {
        this.x = x;
        this.y = y;
        this.distance = distance;
    }
}

function min_steps_to_reach_destination() {
    let matrix = [
        [false, false, false, false],
        [true, true, false, true],
        [false, false, false, false],
        [false, false, false, false]
    ];
    let visit = new Array(4);
    for(let i = 0; i < 4; i++) {
        visit[i] = new Array(4).fill(false);
    }

    const start = new Cell(3, 0, 0), end = new Cell(0, 0, 0);
    const queue = [start];
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let rr = 0, cc = 0, distance = 0;

    let minSteps = 72901739012;

    while (queue.length) {
        let curr = queue.shift();
        if(curr.x === end.x && curr.y === end.y) {
            minSteps = Math.min(minSteps, curr.distance);
            continue;
        }
        distance = curr.distance;
        visit[curr.x][curr.y] = true;
        for (let index = 0; index < dx.length; index++) {
            rr = dx[index] + curr.x;
            cc = dy[index] + curr.y;
            if (rr < 0 || cc < 0 || rr >= 4 || cc >= 4) {
                continue;
            }
            if(!visit[rr][cc] && !matrix[rr][cc]) {
                queue.push(new Cell(rr, cc, distance + 1));
            }
        }
    }
    return minSteps;
}

console.log(min_steps_to_reach_destination());