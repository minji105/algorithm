function solution(X, Y) {
    const counterX = Array(10).fill(0);
    const counterY = Array(10).fill(0);
    
    for (let n of X) counterX[n]++;
    for (let n of Y) counterY[n]++;
    
    let result = '';
    
    for (let i = 9; i >= 0; i--) {
        result += (i + '').repeat(Math.min(counterX[i], counterY[i]));
    }
    
    return result === '' ? '-1' : result[0] === '0' ? '0' : result;
}