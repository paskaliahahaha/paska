const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const name = queryObject.name;

  if (name === undefined) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error: Please provide a name parameter in your query string.\n');
  } else {
    const greeting = `Hello, ${name}! Selamat datang di website ini.`;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(greeting);
  }
});


server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});