function solution(record) {
    const nickname = {};
    let result = [];
    
    for (let str of record) {
        const [log, id, nick] = str.split(' ');
        
        if (log === 'Enter') {
            nickname[id] = nick;
            result.push([id, '님이 들어왔습니다.']);
        } else if (log === 'Leave') {
            result.push([id, '님이 나갔습니다.']);
        } else {
            nickname[id] = nick;
        }
    }
    
    result = result.map(v => nickname[v[0]] + v[1])
    
    return result;
}