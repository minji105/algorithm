function solution(s) {
    return s.toLowerCase().split(' ').map(str => {
        if (str.length === 0) return '';
        return str[0].toUpperCase() + str.slice(1);
    }).join(' '); 
}