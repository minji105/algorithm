function solution(s) {
    if (s.length !== 4 && s.length !== 6)
        return false;
    return [...s].every(c => c >= '0' && c <= '9');
}