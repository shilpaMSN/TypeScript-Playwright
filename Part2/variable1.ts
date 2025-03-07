let userId=784576

userId.toFixed() //Type inference

let result:number; //Type inference
function add():number{
    return 2+2;
}
result=add();

let mail = (lastName:string,userId:number,status:boolean=false)=>{
    return lastName + userId.toFixed();
}

const getHello=(s:string):string=>{
    return "";
}

const hero=[1,2,3]

 let n=hero.map((h):number=>{return h})
 console.log(n);


 function error(msg:string):never{
     throw new Error(msg);

 }
export{} 