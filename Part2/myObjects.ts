const User={
    name:"John Doe",
    age:30,
    email:"johndoe@example.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){

}
let para={name:"string",isPaid:true};
let user=createUser(para);
console.log(user);
createUser({name:"Shilpa",isPaid:false})

export{}