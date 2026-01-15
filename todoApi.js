const http = require('http');
let todos = [];
let idCounter = 1;
const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    if(method==='GET'&&url==='/todos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));
    }
    else if(method === 'POST' && url === '/todos') {
        let body = "";
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            const todo = {
                id: idCounter++,
                task: data.task
            };
            todos.push(todo);

            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(todo));
        });
    }
    else if (method === 'PUT' && url.startsWith('/todos/')) {
        const id = parseInt(url.split('/')[2]);
        let body = "";
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            const todo = todos.find(t => t.id === id);

            if (!todo) {
                res.writeHead(404);
                res.end("Todo not found");
                return;
            }

            todo.task = data.task;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(todo));
        });
    }
    else if (method === 'DELETE' && url.startsWith('/todos/')) {
        const id = parseInt(url.split('/')[2]);
        todos = todos.filter(t => t.id !== id);

        res.writeHead(200);
        res.end("Todo deleted");
    }
    else{
        res.writeHead(404);
        res.end("Route not found");
    }
});
server.listen(3000, () => {
    console.log("TODO API running on port 3000");
});
