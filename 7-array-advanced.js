// push the new value to the array
var customerIDs_1 = [1, 2, 3];
customerIDs_1.push(4);
console.log(customerIDs_1);

var customer_names = ["John", "Jane", "Mary"];
customer_names.push("Peter");
console.log(customer_names);

var customerDetails = [1001, "John", 100.50, "london"];
customerDetails.push(["mary", 10, "London"]);
console.log(customerDetails);

// pop the last value from the array
customerIDs_1.pop();
console.log(customerIDs_1);

customer_names.pop();
console.log(customer_names);

//remove the first value from the array
var customerIDs_2 = [1, 2, 3];
customerIDs_2.shift();
console.log(customerIDs_2);

//unshift the new value to the array
var customerIDs_3 = [1, 2, 3];
customerIDs_3.unshift(0);
console.log(customerIDs_3);