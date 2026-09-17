//Default Parameters

function getCustomerIntroduction(name, location = "London", dateofbirth = "1-1-2001"){
    console.log(name + " " + location + " " + dateofbirth);
}
getCustomerIntroduction("william");
getCustomerIntroduction("william", "new york");

//Rest Parameter

function getCustomerIntroduction_1(name, location){
    console.log(name, location, arguments);
}
getCustomerIntroduction_1("william", "London", "1-1-2001", "Male");

//Spread Operator 
var customerInfo = ["william", "London", "10-10-1965","male"];
var customerInfo_1 = [...customerInfo,"198.16", "olivia"];
console.log(customerInfo_1);

//De-Structuring the Data
var food = ["eggs", "chicken", "grapes"];
var [veg, nonveg, fruits] = ["eggs", "chicken", "grapes"];
console.log(veg);
console.log(nonveg);
console.log(fruits);

//Template Literals
var customers = {
    "loaction" : "London",
    "name" : "William"
};

var customer_details = "customer name is " + customers.name + " and location is " + customers.loaction;
//applying template literal
var customer_details_1 = `customer name is ${ customers.name} and location is ${customers.loaction}`;


console.log(customer_details);
console.log(customer_details_1);