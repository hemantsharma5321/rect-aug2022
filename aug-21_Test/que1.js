const sum=(num1,num2,callback)=>{
let sum=num1+num2;
callback(sum);
}
const display=(sum)=>{
console.log(sum);
}
sum(10,20,display);
