function solution(arr) {
    var answer = [arr[0]];
    
    arr.forEach(x => answer[answer.length-1] !== x ? answer.push(x) : '');
    
    return answer;
}