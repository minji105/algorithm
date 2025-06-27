function solution(n) {
    const arr = [];
    hanoi(n, 1, 3, 2, arr);
    return arr;
}

function hanoi(num, from, to, via, arr) {
    if (num === 1) {
        arr.push([from, to])
    } else {
        hanoi(num - 1, from, via, to, arr)
        arr.push([from, to])
        hanoi(num - 1, via, to, from, arr)
    }
}