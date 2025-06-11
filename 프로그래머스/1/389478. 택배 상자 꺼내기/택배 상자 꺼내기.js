function solution(n, w, num) {
    // 홀수줄이면 역순
    
    const odds = Array(w).fill(1);
    for (let i = 1; i < w; i++) 
        odds[i] = odds[i - 1] + 2;
    const reverseOdds = odds.slice().sort((a, b) => b - a);
    
    let isOddRow = Math.floor((num - 1) / w) % 2 ? false : true;
    let col = (num - 1) % w;
    let plus = isOddRow ? col : (w - 1 - col);
    
    let nowBox = num;
    let count = 0;
    
    while (nowBox <= n) {
        count++;
        nowBox += isOddRow ? reverseOdds[plus] : odds[plus];
        isOddRow = !isOddRow;
        
        console.log(nowBox, plus, isOddRow)
    }
    
    return count;
}