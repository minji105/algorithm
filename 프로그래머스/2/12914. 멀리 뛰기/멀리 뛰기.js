function solution(n) {
    let n0 = 1, n1 = 1;
    let result = 1;
    
    for (let i = 2; i <= n; i++) {
        result = (n0 + n1) % 1234567;
        n0 = n1;
        n1 = result;
    }
    return result;
}