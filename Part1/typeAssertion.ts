//Type assertion in ts is a way to tell the comiler
//that you know more about the type of a value than it does

//1. using <>
//2. using as keyword

let thisnumber:any=123;
let finalBill=<number>thisnumber; //typecasting using <>
console.log(finalBill+700);

let some:any="Ravi";
let len=(some as string).length;//typecasting using as keyword
console.log(len);

let flag:any=true;
let flag2=(flag as boolean);//typecasting using as keyword
console.log(flag2);