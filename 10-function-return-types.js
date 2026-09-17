function getCustomerName() {
    var customerName = "John Doe";
    return customerName;
}
var Customer_1 = getCustomerName();
console.log("Customer Name: " + Customer_1);

//non return type function or void function
function getcustomerName_2() {
    var customerName = "Jane Doe";
}
var customer_2 = getcustomerName_2();
console.log("Customer Name: " + customer_2); // This will print undefined because the function does not return any value

//example 3:
function getcustomerIDs(list, listitem) {
    list.push(listitem);
    list.shift();
    return list;
}
var customerIDs = [1, 2, 3, 4];

//convert array to string
console.log("before the function call", JSON.stringify(customerIDs));
//calling the function
getcustomerIDs(customerIDs, 5);
console.log("after the function call", JSON.stringify(customerIDs));
