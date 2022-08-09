const reverse=(num)=>{
let rev=0;
let lastdigit;
while(num!=0){
lastdigit=num%10;
rev=rev * 10 + lastdigit;
num=Math.floor(num/10);
}
return rev;
}
console.log(reverse(123456));


//method 2
const reverse=(num)=>{
num=num.toString().split('');
let rev=num.reverse().join('');
return Number( rev);
}
console.log(reverse(123456));
