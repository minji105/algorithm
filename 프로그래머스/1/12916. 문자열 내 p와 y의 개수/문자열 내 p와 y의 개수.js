function solution(s){
    s = s.toLowerCase().split('');
    return s.filter(x => x === 'p' || x === 'P').length
        === s.filter(x => x === 'y' || x === 'Y').length;
}