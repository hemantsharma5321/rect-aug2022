const toCamel=(str)=>{
str=str.split(" ");
for (let word of str){
word=word.replace(word[0],word[0].toUpperCase());
  console.log(word);
  //word.charAt(0)=toUpper(word.charAt(0));
}
}
toCamel("hello mr hemant Sharma"); 
