//Arrow function : => fat arrow or lambda function\
//Anonymous function - function with no name

let info=()=>{
    console.log("Hello from Arrow Function");
}

//call the function
info();

let printi=()=>console.log("Hello from Arrow Function");

let add=(a:number,b:number):number=>
    {
        return a+b
    }

    console.log(add(4,5));

    class Person{

        firstName:string;
        lastName:string;

        constructor(firstName:string, lastName:string){
            this.firstName=firstName;
            this.lastName=lastName;
        }

        display =()=>{
            console.log(this.firstName + " "+this.lastName);
        }


    }

    let p=new Person("John","Doe");
    p.display();

