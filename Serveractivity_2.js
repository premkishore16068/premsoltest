
const http = require('http');

const hostname = '127.0.0.1';

const port = 8081;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
});

var fs = require("fs");


fs.readFile('data.txt',function (err, data){
if (err) {
console.log(err.stack);
return;
}
console.log(data.toString());
});
console.log("Program Ended");

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});