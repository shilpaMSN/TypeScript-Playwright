// in ts variables can hold the type as void but undefined can be assigned to that variable
let number:void;
number=undefined;

function nothing():void {
    console.log("This function does not return anything");
    return; //can add only return which does not do anything
}

nothing();
