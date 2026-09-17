//object with function

function getCustomerExactInfo(key) {
    var customer = {
        "name": "clerk",
        "price": 100.09,
        "location": "London",
        "isAdmin": true,
        "family_details": ["mary", "Robert.J", 10],
        "streetname": null,
        "traveltoIndia": undefined
    };

    var customerExactInfo = customer[key];
    return customerExactInfo;
}
var customerKeyInfo = getCustomerExactInfo("name");
console.log(customerKeyInfo);

//creating multi-objects in a array
var customerList = [
    {
        "name": "clerk",
        "price": 100.09,
        "location": "London",
        "isAdmin": true,
        "family_details": {
            "spouse": "mary",
            "kids": ["Robert", "smith"]
        },
        "streetname": null,
        "traveltoIndia": undefined
    },
    {
        "name": "peter.sr",
        "price": 200.57,
        "location": "denmark",
        "isAdmin": false,
        "family_details": {
            "spouse": "milenda",
            "kids": ["john", "wick"]
        },
        "streetname": null,
        "traveltoIndia": "Yes"
    },
]
console.log(customerList[0]);

//get first customer of family details
console.log(customerList[0].family_details);