const fs = require('fs'); 
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopdata = JSON.parse(json)

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;
  
  
  if (pathName === '/products' || pathName === '/') {
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end('Esta es la pagina de productos');
  } 
  
  else if (pathName === '/laptop' && id < laptopdata.length) {
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`Esta es la pagina del laptop ${id}`);
  }

  else {
    res.writeHead(404, {'Content-type' : 'text/html'});
    res.end('URL no encontrada en el servidor');
  }
});

server.listen(7532, '127.0.0.1', () => {
  console.log('Escuchando por requests ahora');
})