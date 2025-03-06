//Enum: Enumeration: data types : hold the set of constants
//numeric
//string
//heterogeneous

//numeric
enum Browser{
    Firefox,
    Safari,
    Chrome=getBrowser("Chrome"),
    Edge=2
}

function getBrowser(name:string):number{
if(name==="Chrome"){
    return 115;
}
return -1;

}

console.log(Browser.Safari);
console.log(Browser);

//string
enum Environment{
    DEV = "development",
    QA="qa",
    STAGE="stage",
    PROD="prod"
}

console.log(Environment.QA);
console.log(Environment);
console.log(Environment['STAGE']);


//HETEROGENOUS
enum STATUS{
    ACTIVE = "active",
    DEACTIVE=0,
    PENDING,
   
}

console.log(STATUS.ACTIVE);
console.log(STATUS['DEACTIVE']);