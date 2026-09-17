//declaration of the class
//Example 1:
class employee_ctr{
    constructor(){
        console.log("constructor is calling")
    }
}

var emp_c = new employee_ctr();

//Example 2:
class employee_pro{

    employeeID;
    employeeName;

    constructor(){
        console.log("constructor is calling")

        this.employeeID = 1;
        this.employeeName = "William";

        console.log(`employeeID ${this.employeeID} and employee name ${this.employeeName}`);
    }
}
 var emp_p = new employee_pro();

 //passing the parameter to the constructor
 //Example 3:
 class employee_param{

    employeeID;
    employeeName;

    constructor(id, name){
        console.log("constructor is calling")

        this.employeeID = id;
        this.employeeName = name;

        console.log(`employeeID ${this.employeeID} and employee name is ${this.employeeName}`);
    }
}
 var emp_p = new employee_param(10, "John");