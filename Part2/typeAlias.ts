
// type User={
//     name:string,
//     age:number,
//     email:string,
//     isActive:boolean
// }


// function createUser(user:User):User{

//     return user;
// }

// createUser({name:"",age:0,email:"",isActive:true})

//****************************** */
type User={
    readonly _id:string, //readonly 
    name:string,
    email:string,
    isActive?:boolean //optional
}

type newOne:User & {
    isActive:boolean    
}

let  myUSER:User={
    _id:"84",
    name:"H",
    email:"FGH@HG",
    //isActive:false
}

myUSER.name="745";

type obj= User

console.log(myUSER.email);