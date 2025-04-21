function solution(participant, completion) {
    let count = {};
    
    participant.forEach(x => {
        count[x] = (count[x] || 0) + 1;
    })
    
    completion.forEach(x => {
        count[x]--;
    })
    
    return Object.keys(count).find(name => count[name] > 0);
}