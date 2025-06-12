function solution(n, w, num) {
    // 홀수줄이면 역순
    
    let row = Math.floor((num - 1) / w);
    const col = row % 2 ? (num - 1) % w : w - 1 - (num - 1) % w;

    const A = 2 * col + 1;
    const B = 2 * (w - col - 1) + 1;
    
    let count = 0;
    let nowBox = num;
    let toggle = row % 2 === 0;
    
    while (nowBox <= n) {
        const plus = toggle ? A : B;
        nowBox += plus;
        count++;
        toggle = !toggle
    }
    
    return count;
}