function solution(n) {
    let answer = n;
    for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) answer += i;
    }
    return n === 1 ? 1 : answer;
}