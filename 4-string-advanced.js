var employeeName = "John Doe";
// var employeeLastCharacter = employeeName.charAt(7);
var employeeLastCharacter = employeeName.charAt(employeeName.length - 1);
console.log(employeeLastCharacter);

var firstName = "John";
var lastName = "Doe";
// var fullName = firstName + " " + lastName;
var fullName = firstName.concat(" ", lastName);
console.log(fullName);