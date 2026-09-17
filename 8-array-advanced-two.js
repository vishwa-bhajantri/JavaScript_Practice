//Array within array
// var customerList_1 = [ ["james", 50, "london"], ["M.Gates", 60, "New York"] ];
//push the new value with help of function

//declaration of function
function getCustomerList() {
    var customerList_1 = [ ["james", 50, "london"], ["M.Gates", 60, "New York"] ];
    customerList_1.push(["Smith", 70, "Paris"]);
    return customerList_1;
}

//Exaple:1
//calling the function
var customerList_2 = getCustomerList();
console.log(customerList_2);

//passing the arguements to the function
function mathsAddition(num1, num2) {
    console.log(num1 + num2);
}
//calling the function with arguments
mathsAddition(5, 10);

Example:2
function getAnotherNewCustomerList(newList) {
    var customerList_3 = [ ["james", 50, "london"], ["M.Gates", 60, "New York"] ];
    customerList_3.push(newList);
    return customerList_3;
}
var customerList_4 = getAnotherNewCustomerList(["Smith", 70, "Paris"]);
console.log(customerList_4);