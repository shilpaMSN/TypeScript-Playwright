interface one{
    name:string;
    age:number;
    getDetails():string;
    greet(Cname:string):void;
}

// reopening of teh interface - can add properties and methgods to the existing interface

interface one{
    place:string;
}

//inheretence  of interface 
interface Admin extends one{
    role:"admin"|"ta"|"learner"
}
const rakesh: Admin={
    name:"Rakesh",
    age:25,
    place:"New York",
    role:"admin",
    getDetails():string{
        return "";
    },
    greet(Cname:string):void{
        console.log("Hello "+Cname);
    }
}
rakesh.greet("Rakesh");