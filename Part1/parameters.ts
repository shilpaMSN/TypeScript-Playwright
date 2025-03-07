//optional params:

function getInformation(firstname: string, id?: number):any{
    return firstname+" "+id;

}

console.log(getInformation("shilpa"));

//default parameters

function getDetails(firstName: string, lastName: string="Doe", id: number=12345):any{
    return firstName+" "+lastName+" "+id;
}

console.log(getDetails("RAVI", "SHANKAR",undefined));