function solution(s) {
    const ans = [0, 0];
    
    while (s.length > 1) {
        const len = s.length;
        s = s.replaceAll('0', '');
        
        ans[0]++;
        ans[1] += len - s.length;
        
        s = s.length.toString(2);
    }
    return ans;
}