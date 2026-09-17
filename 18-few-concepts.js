//covert String into Number
//example 1:
var customerId_1 = "1";
var customerId_number_1 = parseInt(customerId_1);
console.log(customerId_number_1);

//Example 2:
var customerId_2 = "c1"
var customerId_number_2 = parseInt(customerId_2);
console.log(customerId_number_2);
if(isNaN(customerId_number_2)){
    console.log("it is not the number");
}
else{
    console.log("it is the number");
}


//if else condition using ternary operator
function getReturnPrice(){
if(100 == 10){
    return "price is 100";
}
else{
    return "price is not 100";
}
}

//if else condition using ternary operator
//Example 1:
var customer_price_1 = 100 == 100 ? "price is 100" : "price is not 100";
console.log(customer_price_1);

//Example 2:
var customer_name = "clerk";
var customer_price_2 = customer_name == "john" ? "he is clerk" : "he is not clerk";
console.log(customer_price_2);

//Example 3:
var number = 1;
var number_status = number > 0 ? "positive number" : number < 0 ? "it is a negative number" : "zero";
console.log(number_status);

//check the data type strictly
//example 1:
var employeeId = "1";
if (employeeId === 1){
    console.log("input is correct");
}
else{
    console.log("input is not correct");
}

//Example 2:
if (null === undefined){
    console.log("input is correct");
}
else{
    console.log("input is not correct");
}