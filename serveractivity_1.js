

const http = require('http');

const hostname = 'localhost';

const port = 9090;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
});

	var a =  1;
	var b =  2;
	
	var c;
	c=a+b;
	response = {
		result: c
	};
	


server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log(c);
});