function solution(n, w, num) {
    // 홀수줄이면 역순
    
    let row = Math.floor((num - 1) / w);
    const col = row % 2 ? (num - 1) % w : w - 1 - (num - 1) % w;

    let nowBox = num;
    let count = 0;
    
    while (nowBox <= n) {
        const plus = (row % 2 ? w - col - 1 : col) * 2 + 1;
        nowBox += plus;
        count++;
        row++;
        
        console.log(nowBox, plus, col)
    }
    
    return count;
}