//let keyword
//we cannot access let keyword outside the block
function checkingScope_let() {
    let scopeStatus = "*****************function block scope*************";
    if (true) {
        let letscope = "--------------block scope------------";
        console.log("block scope status of let", letscope);
    }
    console.log("function block scope status of let", scopeStatus);
    console.log("function block scope status of let", letscope);
    console.log("Executing....");
}
//checkingScope_let();

//var keyword
//we can access var keyword outside the block
function checkingScope_var(){
    var scopeStatus_var = "*****************function block scope*************";
    if(true){
        var varscope = "--------------block scope------------";
        console.log("block scope status of var", varscope);
    }
    console.log("function block scope status of var", scopeStatus_var);
    console.log("function block scope status of var", varscope);
}
//checkingScope_var();

//Exception Handling
function checkingScope_let() {
    let scopeStatus = "*****************function block scope*************";
    if (true) {
        let letscope = "--------------block scope------------";
        console.log("block scope status of let", letscope);
    }
    console.log("function block scope status of let", scopeStatus);

    try {
        console.log("function block scope status of let", letscope);
    }
    catch (ex) {
        console.log("letscope is not defined please cross check the code");
    }
    console.log("Executing....");
}
//checkingScope_let();

//Mutate(change) the value in array
const customerNames = ["john", "clerk"];
      customerNames[0] = "peterson";
      customerNames[1] = "Robert.J";
console.log(customerNames);

//Mutate(change) the value in object
//Example 1:
const employee = {
    ID : 1,
    Name : "John",
    Location : "London"
};
function getEmployeeLocation(employeeName){
    if(employeeName == "John"){
        employee.ID = 2;
    }
    return employee;
}
//let employeeDetails = getEmployeeLocation("John");
//console.log(employeeDetails);

//prvent the modification of the value in object by freezing method
//Example 2:
const employee_1 = {
    ID : 1,
    Name : "John",
    Location : "London"
};
function getEmployeeLocation_1(employeeName){
    Object.freeze(employee_1);
    if(employeeName == "John"){
        employee_1.ID = 2;
    }
    return employee_1;
}
let employeeDetails_1 = getEmployeeLocation_1("John");
console.log(employeeDetails_1);