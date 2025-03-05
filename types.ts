//TypeScript is a stat
//Type inference - not defining the type of the variable
//Type Annotations-  defining the type of the variable 

let age: number=31; //Type Annotations
let firstname: string;
let isEmployed: boolean=true;

let lastname: "hvcdhvc"; // type inference 
let billAmount=76354; // type inference

//null and undefined
let city:null=null;
let country: undefined=undefined;

//any
let value:any=40;
value="hdgvhyd";
value=true;

//void: function does not return any value

function printHelli(): void {
    console.log("Hello World!");
}

function getNumber(): number {
    return 3847;
}

function getString(): string {
    return "3847";
}



function getBoolean(): boolean {
    return false;
}

function getany(): any {
    return true;
}

function addition(a:number,b:number): number {
    return a+b;
}

let num=addition(9,9);
console.log(num);