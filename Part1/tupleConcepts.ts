//tuple: fixed size, order matters
//tuplevs array
//array: dynamic: runtime more values can be added

let person:[string,number]=["hcd",9];

let person2:[string,number,boolean][]=[["hcd",9,true],["hcd",0,false],["hcd",8,true]];

console.log(person2[0][1]);

let customer: [string,number]=["RAVI",900];

customer.push("Rakesh",45);
console.log(customer);
