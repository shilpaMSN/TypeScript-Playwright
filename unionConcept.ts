//union operator= |


let userId:(string|number);

userId="yes";
userId=0;
console.log(userId);

function getUserInformation(customerId:(string|number)):boolean {
 if(typeof(customerId)==='string'){
    return true;
 }else if(typeof(customerId)==='number'){
 return true;
 }
 return false;
}

console.log(getUserInformation(8767));