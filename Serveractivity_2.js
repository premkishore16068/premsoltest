const http = require('http');

const hostname = '127.0.0.1';



let fs = require('fs');

let handleRequest = (request, response) => {
     response.writeHead(200, {
            'Content-Type': 'text/.txt'
          });
        fs.readFile('./server.html', null, function (error, data) {
      if(error) {
     response.writeHead(404); 
      response.write('file not found');
     } else {
    response.write(data);
  }
  response.end();
  
  });
  };
    http.createServer(handleRequest).listen(8081);
