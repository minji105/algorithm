function solution(s) {
    return s.split(' ').map(v => v = char(v)).join(' ');
}

function char(word) {
    return word.split('').map((v, i) => v = i % 2 ? v.toLowerCase() : v.toUpperCase()).join('');
}