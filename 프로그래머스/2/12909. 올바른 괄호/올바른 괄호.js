function solution(s) {
    var ans = 0;
    for (let c of s) {
        if (c === '(') ans++;
        else {
            ans--;
            if (ans < 0) return false
        }
    }
    return ans === 0 ? true : false;
}