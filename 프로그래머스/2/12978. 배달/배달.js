function solution(N, road, K) {
    const distance = Array(N + 1).fill(Infinity);
    distance[1] = 0;
    
    const graph = Array.from({ length: N + 1 }, () => []);
    
    // 양방향
    for (const [a, b, cost] of road) {
        graph[a].push([b, cost]);
        graph[b].push([a, cost]);
    }
    console.log(graph);
    
    const queue = [[1, 0]];
    
    while (queue.length > 0) {
        const [cur, curCost] = queue.shift();
        
        for (const [next, cost] of graph[cur]) {
            const total = curCost + cost;
            
            if (total < distance[next]) {
                distance[next] = total;
                queue.push([next, total]);
            }
        }
    }
    
    return distance.filter(v => v <= K).length;
}