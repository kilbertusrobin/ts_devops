import * as http from 'http';

const port = process.env.PING_LISTEN_PORT ? parseInt(process.env.PING_LISTEN_PORT) : 7;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
  
  if (req.method === 'GET' && req.url === '/ping') {
    res.setHeader('Content-Type', 'application/json');
    
    res.writeHead(200);
    res.end(JSON.stringify(req.headers));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`Send a GET request to /ping to receive headers`);
});