const generate=(str)=>{
let result=[];
for(let i=0;i<str.length+1;i++){
	for(let j=i+1;j<str.length+1;j++){
		result.push(str.slice(i,j));
	}
}
  
return result;
}
 console.log(generate('dog'));
