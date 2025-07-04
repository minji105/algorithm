function solution(n, computers) {
    const visited = Array(n).fill(false);
    let count = 0;
    
    const DFS = (index) => {
        visited[index] = true;
        
        for (let i = 0; i < n; i++) {
            if (computers[index][i] === 1 && !visited[i]) {
                DFS(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            DFS(i);
            count++;
        }
    }
    
    return count;
}