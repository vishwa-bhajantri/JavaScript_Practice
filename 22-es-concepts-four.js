//declaration of the class
//Example 1:
class employee_ctr {
    constructor() {
        console.log("constructor is calling")
    }
}

var emp_c = new employee_ctr();

//Example 2:
class employee_pro {

    employeeID;
    employeeName;

    constructor() {
        console.log("constructor is calling")

        this.employeeID = 1;
        this.employeeName = "William";

        console.log(`employeeID ${this.employeeID} and employee name ${this.employeeName}`);
    }
}
var emp_p = new employee_pro();

//passing the parameter to the constructor
//Example 3:
class employee_param {

    employeeID;
    employeeName;

    constructor(id, name) {
        console.log("constructor is calling")

        this.employeeID = id;
        this.employeeName = name;

        console.log(`employeeID ${this.employeeID} and employee name is ${this.employeeName}`);
    }
}
var emp_p = new employee_param(10, "John");

//methods
//Example 4:
class employee_mtd {
    employeeID;
    employeeName;

    constructor(id, name) {
        console.log("constructor is calling")

        this.employeeID = id;
        this.employeeName = name;

        console.log(`employeeID ${this.employeeID} and employee name is ${this.employeeName}`);
    }
    getEmployee() {
        console.log("calling the employee method");
        console.log(`employeeID ${this.employeeID} and employee name is ${this.employeeName}`);
    }
}
var emp_m = new employee_mtd(8, "steve");
emp_m.getEmployee();


//adding methods to the class
//Example 5:
var emp_database = [
    {
        "name" : "clerk",
        "location" : "london",
        "price" : 190.09
    },
    {
        "name" : "peter",
        "location" : "new york",
        "price" : 145.09
    },
    {
        "name" : "robert",
        "location" : "london",
        "price" : 987.09
    }
]

class employee_mtd_params {
    employeeID;
    employeeName;

    constructor(id, name) {
        console.log("constructor is calling")

        this.employeeID = id;
        this.employeeName = name;

        console.log(`employeeID ${this.employeeID} and employee name is ${this.employeeName}`);
    }
    getEmployee() {
        console.log("calling the employee method");
        console.log(`employeeID ${this.employeeID} and employee name is ${this.employeeName}`);
    }

    getEmployeeByLocation(location){
        var customerRecords = emp_database.filter((employee)=>{
            return employee.location == location;
        })
        return customerRecords;
    }
}
var emp = new employee_mtd_params(8, "steve");
//emp_m.getEmployee();
var employeerecords = emp.getEmployeeByLocation("london");
console.log(employeerecords);


//Inheritance or communicating one class to the another class
class emp_class_1{
    constructor(id, empname){
        console.log(`emp class 1 employeeID is ${id} and name ${empname}`);
    }
}

class emp_class_2 extends emp_class_1{
    constructor(){
        super(1, "Misard");
        console.log("emp class 2 is calling");
    }
}
var emp_class_2_obj = new emp_class_2();