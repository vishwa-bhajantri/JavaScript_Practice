//boolean values
var isAdminRole = true;
var isSalesRepRole = false;

//conditional statements
if(isAdminRole){
    console.log("hey he is admin");
}
else if(isSalesRepRole){
    console.log("Hey he is an Sales Rep");
}
else {
    console.log("he is not admin");
}

//to check the value is correct or not
var customerID = 1;
var customerName = "john";

if (customerID == 1){
    console.log("customer id is 1")
}
else{
    console.log("customer id is not 1");
}

//AND Operator
if (customerID == 1 && customerName == "john"){
    console.log("correct values");
}
else{
    console.log("wrong values");
}

//OR Operator
if (customerID == 2 || customerName == "john"){
    console.log("correct values");
}
else{
    console.log("wrong values");
}

//using less than or greater than equal to
var customerPrice_1 = 1000;
var customerPrice_2 = 2000;
if (customerPrice_1 >=1000 && customerPrice_2 <=2000){
    console.log("customer is okay with the price");
}
else{
    console.log("not okay with the price");
}

//use if and else condition in the function
function getLocationFullNameDetails(location){
    var location_name = "";
    if(location == "AUS"){
       location_name = "Australia";
    }
    else if(location == "SA"){
        location_name = "South Africa";
    }
    else{
        location_name = "location is not available";
    }
    return location_name;
}

var location_details = getLocationFullNameDetails("SA");
console.log("you are passing value is :", location_details);

