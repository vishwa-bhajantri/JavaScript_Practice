//while loop
//printing 
var customerID = [];
var index = 0;
var length = 10;

while (index <= length) {
    customerID.push(index);
    index += 1;
}
console.log(customerID)

//for loop
var customerIDs=[];
var n = 10;

for(var id = 0 ; id <= n ; id++){
    customerIDs.push(id);
}
console.log(customerIDs)

//to find the total prices of an array
var customerPrices = [101.9, 200.09, 300.89, 410.78, 115.89];
var totalPrice = 0;

for(var ind = 0; ind < customerPrices.length; ind++){
    totalPrice += customerPrices[ind];
}
console.log(totalPrice);