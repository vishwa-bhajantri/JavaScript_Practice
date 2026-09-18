class payment
{
    pay()
    {
        console.log("payment done");
    }
}
class creditCard extends payment
{
     pay()
    {
        console.log("payment through credit card");
    }
}
class UPI extends payment
{
     pay()
    {
        console.log("payment through UPI");
    }
}
class debitCard extends payment
{
     pay()
    {
        console.log("payment through debit card");
    }
}
class netBanking extends payment
{
     pay()
    {
        console.log("payment through net banking");
    }
}