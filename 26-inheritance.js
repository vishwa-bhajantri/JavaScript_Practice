class vehicle
{
    brand;
    constructor(cbrand)
    {
        this.brand = cbrand;
    }
    start()
    {
        console.log(this.brand + "started");
    }
}
class car extends vehicle
{
    model;
    constructor(cbrand, cmodel)
    {
        super(cbrand);
        this.model = cmodel;
    }
    displayDetails()
    {
        console.log("Brand : " + this.brand + " Model : " +  this.model);
    }
}

const car1 = new car("BMW", "X5");
car1.displayDetails();

const car2 = new car("Renault", "Duster");
car2.displayDetails();

const car3 = new car("Suzuki", "Swift");
car3.displayDetails();