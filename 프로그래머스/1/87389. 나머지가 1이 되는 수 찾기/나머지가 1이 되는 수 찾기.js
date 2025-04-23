function solution(n) {
    n--;
    for (let i = 2; i * i <= n; i++){
        if (n % i === 0) return i;
    }
    return n;
}