//Arrow Function 

//Normal or Regular Function
function getName(){
    return "peter";
}
var customer_name = getName();
console.log(customer_name);

//variable assigned by the function directly
var customer_name_1 = function(){
    return "James";
};
console.log(customer_name_1);

//with the help of Arrow
var customer_name_2 = () =>  {
    return "William";
};
console.log(customer_name_2);