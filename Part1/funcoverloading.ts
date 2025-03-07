//Typescript provides the concept of function overloading 
//you can have multiple functions
//with the same name
//but different parameter types and return type
//however, the number of parameters should be the same


//step 1-provide the implementation/ prototype of teh function
function add(a: string, b: string): number;
function add(a: number, b: number): number;

//step 2-define the implementation with function body only once 
function add(a: number, b: number): number {
    return a+b;
}

add(49,9);
export{}