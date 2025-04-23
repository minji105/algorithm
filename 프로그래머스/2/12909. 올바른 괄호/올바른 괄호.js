function solution(s) {
    var arr = [];
    for (let c of s) {
        if (c === '(') arr.push(c);
        else {
            if (arr.length === 0) return false;
            else arr.pop();
        }
    }
    return arr.length === 0;
}