//cant assign any value to this
//let nothing:never;


//never returns anything even blank return wont happen unlike void
function throwError():never{
    throw new Error("Something went wrong");
}
//throwError();

//infinitr loop
function display():never{
    while(true){
        console.log("Hello World");
    }
}

display();