function solution(s) {
    const mid = Math.ceil(s.length / 2);
    return s.substring(mid - 1, s.length % 2 ? mid : mid + 1);
}