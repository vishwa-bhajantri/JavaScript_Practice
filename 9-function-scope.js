var customerName = "John Doe";

function customerbankDetails() {
    var customerPassword = "QwE@123#";
    console.log("Customer Name inside function: " + customerName);
    console.log("Customer Password inside function: " + customerPassword);
}
customerbankDetails();
console.log("Customer Name outside function: " + customerName);
console.log("Customer Password outside function: " + customerPassword); // This will throw an error because customerPassword is not defined in this scope