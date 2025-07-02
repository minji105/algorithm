function solution(tickets) {
    const route = {};
    const visited = {};
    
    for (const [from, to] of tickets) {
        route[from] = route[from] ? [...route[from], to] : [to];
    }
    for (const from in route) {
        route[from].sort();
        visited[from] = Array.from({length: route[from].length}, () => 0);
    }
    console.log(visited);
    
    const total = tickets.length;
    let result = [];
    
    const DFS = (now, path) => {
        if (path.length === total + 1) {
            result = path;
            return true;
        }
        
        if (!route[now]) return false;
        
        for (let i = 0; i < route[now].length; i++) {
            if (!visited[now][i]) {
                visited[now][i] = 1;
                if (DFS(route[now][i], [...path, route[now][i]])) {
                    return true;
                }
                visited[now][i] = 0;
            }
        }
        
        return false;
    }
    
    DFS('ICN', ["ICN"]);
    
    return result;
}