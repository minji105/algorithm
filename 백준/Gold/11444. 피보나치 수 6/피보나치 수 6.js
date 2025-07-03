const fs = require("fs");
let N = BigInt(fs.readFileSync("/dev/stdin").toString().trim());

const MOD = 1_000_000_007n;
const memo = new Map();
memo.set(0n, 0n);
memo.set(1n, 1n);
memo.set(2n, 1n);

const fibonacci = (n) => {
  if (memo.has(n)) return memo.get(n);

  let result;
  if (n % 2n === 0n) {
    // F(2k) = F(k) * (F(k+1) + F(k-1))
    const k = n / 2n;
    const a = fibonacci(k);
    const b = fibonacci(k + 1n);
    const c = fibonacci(k - 1n);
    result = (a * ((b + c) % MOD)) % MOD;
  } else {
    // F(2k+1) = F(k+1)^2 + F(k)^2
    const k = (n - 1n) / 2n;
    const a = fibonacci(k);
    const b = fibonacci(k + 1n);
    result = ((a * a) % MOD + (b * b) % MOD) % MOD;
  }

  memo.set(n, result);
  return result;
};

console.log(fibonacci(N).toString());