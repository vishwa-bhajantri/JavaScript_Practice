//Arrow Function 

//Normal or Regular Function
function getName(){
    return "peter";
}
var customer_name = getName();
console.log(customer_name);

//variable assigned by the function directly or Anonymous function
var customer_name_1 = function(){
    return "James";
};
console.log(customer_name_1);

//with the help of Arrow
var customer_name_2 = () =>  {
    return "William";
};
console.log(customer_name_2);

//passing the parameter to Arrow function
var customer_name_3 = (cust) =>  {
    return cust;
};
console.log(customer_name_3("william"));

//passing the multiple parameter to Arrow function
var customer_name_location = (custName, custLocation) =>  {
    return custName + " " + custLocation;
};
console.log(customer_name_location("william", "New York"));

//another method for passing parameters in Arrow function
var customer_name_location_1 = (custName, custLocation) => custName + " " + custLocation;
console.log(customer_name_location_1("william", "california"));

//Arrow function in the Real time Scenarios
var customers = [
    {
        "name" : "clerk",
        "price" : 200.09,
        "location" : "london"
    },
    {
        "name" : "william",
        "price" : 100.09,
        "location" : "london"
    },
    {
        "name" : "Andy",
        "price" : 312.09,
        "location" : "washington"
    },
    {
        "name" : "Andy",
        "price" : 56.09,
        "location" : "bern"
    }
];
//get the customer name or filter who is having the name Andy
var customersByName = customers.filter(function(customer){
    if(customer.name == "Andy"){
        return customer;
    }
})
console.log(customersByName)

//now with the Arrow Function
var customersByLocation = customers.filter((customer_1) => {
    if(customer_1.location == "London"){
        return customer_1;
    }
})
console.log(customersByLocation)