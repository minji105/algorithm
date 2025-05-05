function solution(x) {
    var sum = (x + '').split('').map(Number).reduce((a, c) => a + c, 0);
    return x % sum === 0;
}