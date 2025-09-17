const makeChange = (c) => {
  const obj={
	  q:0.25,
	  d:0.10,
	  n:0.05,
	  p:0.01
  }
let obj2={
	q:0,
	d:0,
	n:0,
	p:0
}

while(c>=0 ){
	// console.log("new while")
for(let ch in obj){
	// console.log(c,ch)
	
	if(c>=obj[ch]){
c=(c-obj[ch])
		obj2[ch]+=1
		break;
	}
	
}
}
return obj2
};

Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
