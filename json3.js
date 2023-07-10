const fs = require("fs");


const users = require("./users0");



let user = {
    name:"Saps1",
	age: 25,
	language: ["Node", "React", "Graphql"]
};



let user1 = {
    name:"Saps2",
	age: 35,
	language: ["MSA","Graphql"]
};



users.unshift(user);
users.push(user1)



fs.writeFile("usernew.json", JSON.stringify(user), err => {



    if (err) throw err;

      console.log("Done writing");
});
