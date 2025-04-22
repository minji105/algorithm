function solution(s) {
    return s.split(' ')
            .map(word => 
                 [...word].map((v, i) => i % 2 ? v.toLowerCase() : v.toUpperCase()).join('')
                )
            .join(' ');
}