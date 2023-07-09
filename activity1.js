const async = require("async");

function cube(a, b, c){
	return new Promise((reslove)=>{
		setTimeout(()=>{
			reslove(a * b * c);
		},1000);
	});
}

async function output(a, b, c){
	const ans = await cube(a, b, c);
        console.log(ans);
}

output(4, 4, 4);