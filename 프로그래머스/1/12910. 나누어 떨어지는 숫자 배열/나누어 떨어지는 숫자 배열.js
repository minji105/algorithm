function solution(arr, divisor) {
    arr = arr.filter(x => x % divisor === 0);
    return arr.length ? arr.sort((a, b) => a - b) : [-1];
}