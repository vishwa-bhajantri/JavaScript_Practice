//Bank related example

class BankAccount 
{

    // balance = 0; //public property
    #balance ; //private property

    constructor(balance)
    {
        //console.log(this.#balance);
        this.#balance = balance;
        //console.log(this.#balance);
    }

    deposit(ammount)
    {
        this.#balance += ammount;
    }
    withdraw(ammount)
    {
        this.#balance -= ammount;
    }
    getBalance()
    {
        return this.#balance;
    }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log("Balance After Deposit :", myAccount.getBalance());

myAccount.withdraw(500);
console.log("Balance After withdraw :", myAccount.getBalance());
// account.balance = 1000; //modifying the property
// console.log("Initial Balance :", account.#balance);