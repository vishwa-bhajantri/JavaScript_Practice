//object creation
//example 1:
var customer_1 = {
    "name": "John"
};
//accessing value from the object
console.log(customer_1.name);
console.log(customer_1["name"]);

//Example 2:
var customer_2 = {
    "name": "clerk",
    "price": 100.09,
    "location": "London",
    "isAdmin": true,
    "family_details": ["Mary", "robert.j", 10],
    "streetname": null,
    "traveltoIndia": undefined
};
// console.log(customer_2);
//accessing value from the object
console.log(customer_2["name"]);
console.log(customer_2["price"]);

//Example 3:
var customer_3 = {
    "name": "clerk",
    "price": 100.09,
    "location": "London",
    "isAdmin": true,
    "family_details": {
        "spouse_name": "mary",
        "kid_name": "robert.j",
        "kid_age": 10
    },
    "streetname": null,
    "traveltoIndia": undefined
};
console.log(customer_3);
//updating existing name
customer_3.name = "Clerk.Jr"
console.log(customer_3);
//adding more property to the object
customer_3["dateofbirth"] = "10-10-2009";
customer_3["habits"] = ["watching movie", "playing tennis", "travelling"];
console.log(customer_3);
//delete a property from the object
delete customer_3.streetname;
console.log(customer_3);

//creating array with list of objects
//Example 4:
var customer_4 = [
    {
        "name" : "John",
        "location" : "washington",
    },
    {
        "name" : "clerk",
        "location" : "new jersy",   
    }
]
console.log(customer_4);

//Example 5:
var customerID = 1;
var customer_5 = {
    1 : "Peter.Jr"
};
console.log(customer_5[customerID]);

//use the return function in the object
//Example 6:
function getCustomerName(){
    return "John Smith";
}

var customer_6 = {
    "name" : getCustomerName()
};

var customer_name = customer_6["name"];
console.log(customer_name);