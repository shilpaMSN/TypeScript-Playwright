let anything:any;
anything=7645;
console.log(anything);

anything="hello";
anything=false;
console.log(anything);

let lang:any[]=["en", 497,true,true,true,true,true,true,true,true];
console.log(lang);


function something(a:number, b:number):any{
if(a>b){
    return true;
}else{
    return false;
}
}

console.log(something(4,8));