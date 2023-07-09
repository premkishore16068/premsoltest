const async = require("async");

function square(x){
	return new Promise((reslove)=>{
		setTimeout(()=>{
			reslove(Math.pow(x,2));
		},2000);
	});
}

async function output(x){
	const ans = await square(x);
        console.log(ans);
}

output(10);