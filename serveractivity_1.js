
const http = require('http');

const hostname = '127.0.0.1';
const port = 9090;

//port

const server = http.createServer((req,res) => {
res.statusCode = 200; 
res.setHeader('Content-Type' , 'text/plain');
let a= prompt("Please enter first number","");
let b=  prompt("Please enter second number","");

});


server.listen(port,hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
console.log("Consoles HelloWorld");
var c = parseInt(a) + parsrInt(b);
console.log(c);
});