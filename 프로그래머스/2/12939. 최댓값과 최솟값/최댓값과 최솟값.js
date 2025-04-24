function solution(s) {
    s = s.split(' ').map(v => v / 1);
    return Math.min(...s) + ' ' + Math.max(...s);
}