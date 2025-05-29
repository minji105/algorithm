function solution(t, p) {
    const len = p.length;
    let count = 0;
    
    for (let i = 0; i <= t.length - len; i++) {
        if (t.substr(i, len) <= p) count++;
    }
    
    return count;
}