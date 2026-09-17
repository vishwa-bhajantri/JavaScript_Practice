//use switch case and if with return type in function
function getCustomerDetails(location, price){
    
    var customerDetails = [];
    var message = "";
    if(price == 1000 && location == "London")
    {
        customerDetails.push("John");
        customerDetails.push(1);
    }
    else if(price < 1000)
    {
        switch(location){
            case "London":
                customerDetails.push("Robert");
                customerDetails.push(2);
                break;
            case "Washington":
                customerDetails.push("Clerk");
                customerDetails.push(3);
                break;
            default:
                customerDetails.push(null);
                customerDetails.push(0);
                break;
        }
    }
    else{
        message = "no customer is available";
        console.log(message);
    }
    return customerDetails;
}
var result = getCustomerDetails("London", 500);
console.log(result);