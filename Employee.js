const fs = require("fs");


fs.readFile("Employee.json", function(err,data){
	
if(err) throw err;


const users = JSON.parse(data);

const.log(users);
});