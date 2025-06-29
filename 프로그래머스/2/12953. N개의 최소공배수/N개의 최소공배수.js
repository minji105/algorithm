function solution(arr) {
    arr = arr.sort((a, b) => b - a);
    
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = LCM(result, arr[i]);
    }
    
    return result;
}

// 최대공약수 (유클리드 호제법)
function GCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return GCD(b, a % b);
    }
}

// 최소공배수
function LCM(a, b) {
    return (a * b) / GCD(a, b);
}