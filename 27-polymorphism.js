//polymorphism
//same method behaves bifferently based on the situation
class animal
{
    makesound()
    {
        console.log("Makes Sound");
    }
}

class dog extends animal
{
    makesound()
    {
        console.log("dog barks");
    }
}

class cat extends animal
{
    makesound()
    {
        console.log("cat meows");
    }
}
const dog1 = new dog();
dog1.makesound();

const cat1 = new cat();
cat1.makesound();