function solution(progresses, speeds) {
    progresses = progresses.map((x, i) => Math.ceil((100-x)/speeds[i]));
    
    var answer = [1];
    var n = progresses.shift();
    
    progresses.forEach((x, i) => {
        if(x <= n) answer[answer.length - 1]++;
        else { answer.push(1); n = x; }
    })
    
    return answer;
}