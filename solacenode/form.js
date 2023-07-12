const http = require('http');

const hostname = '127.0.0.1';
const port = 9090;

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type' , 'text/plain');
	res.end('Welcome to forms\n');
});


console.log('Enter user name')




console.log('Enter password')



console.log('SUBMIT')

server.listen(port,hostname, () => {
	console.log('Server running at http://${hostname}:${port}/');
	console.log("Consoles Welcome to forms");
	
});
