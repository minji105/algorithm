function solution(s, skip, index) {
    let alp = 'abcdefghijklmnopqrstuvwxyz';
    skip.split('').forEach(c => alp = alp.replace(c, ''));
    return s.split('').map(v => alp[(alp.indexOf(v) + index) % alp.length]).join('');
}