class employee{

    name = " ";
    age = 0;

    constructor(){
        console.log("employee created");
    }

    display(){
        console.log("Name : " + this.name);
        console.log("age : " + this.age);
    }
}
const emp1 = new employee();
console.log(emp1.name);
console.log(emp1.age);
emp1.display();

console.log("=====================================");

const emp2 = new employee();
emp2.name = "jsabfkajs";
emp2.age = "30";
console.log(emp2.name);
console.log(emp2.age);
emp2.display();

console.log("=====================================");

const emp3 = new employee();
emp3.name = "sdgsdg";
emp3.age = "35";
console.log(emp3.name);
console.log(emp3.age);
emp3.display();