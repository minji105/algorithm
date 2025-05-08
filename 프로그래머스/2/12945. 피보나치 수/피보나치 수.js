function solution(n) {
    let n0 = 0, n1 = 1;
    for (let i = 2; i <= n; i++) {
        const fib = (n0 + n1) % 1234567;
        n0 = n1;
        n1 = fib;
    }
    return n1;
}