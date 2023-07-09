const async = require("async");

function rectangle (a, b){
	return new Promise((reslove)=>{
		setTimeout(()=>{
			reslove(a * b);
		},3000);
	});
}

async function output(a, b){
	const ans = await rectangle(a, b);
        console.log(ans);
}

output(8, 9);