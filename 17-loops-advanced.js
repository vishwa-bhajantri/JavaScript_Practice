//use loop in the function
var customerList = [
    {
        "name": "clerk",
        "price": 100.09,
        "location": "London",
        "isAdmin": true,
        "streetname": null,
        "traveltoIndia": undefined
    },
    {
        "name": "peter",
        "price": 200.57,
        "location": "denmark",
        "isAdmin": false,
        "streetname": null,
        "traveltoIndia": "Yes"
    },
]
//get the customer record based on customer name
function getCustomerRecordByName(customerName){
    var customer = null;
    for (index = 0; index < customerList.length; index++){
        if(customerList[index].name == customerName){
            customer = customerList[index];
        }
    }
    return customer;
}
var customerRecord = getCustomerRecordByName("peter");
console.log(customerRecord);