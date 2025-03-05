let names:string[]=["a", "b", "c", "d", "e"];
console.log(names);

//using generics:
let empNames:Array<string> = ["a", "b", "c", "d"];
let empInfo:Array<any>=["dhg",67,false];
let empId:Array<number>=[6,7,3];
let values:(string|number)[]=[6,4,"jhj","hj"];
let valuesGenerics:Array<string|number>=["ufhuh",9];

//first array declaration and init
let users:Array<any>;
users=[6,"chghd",true];

let employees:Array<string>=["shilpa","ravi","rakesh"];

for(let i=0; i<employees.length; i++){
    console.log(employees[i]);
}