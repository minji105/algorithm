function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array(n + 1).fill(0);
    visited[1] = 1;
    
    for (const [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const queue = [1];
    
    while (queue.length) {
        const cur = queue.shift();
        
        for (const next of graph[cur]) {
            if (!visited[next]) {
                queue.push(next);
                visited[next] = visited[cur] + 1;
            }
        }
    }
    
    const maxLen = Math.max(...visited);
    return visited.filter(v => v === maxLen).length;
}