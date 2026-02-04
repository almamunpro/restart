class Dog{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
    bark(){
        console.log(`${this.name} says Woof! Woof!`);
    }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.eat();
dog1.bark();
console.log(dog1);

class Cat {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
    meow(){
        console.log(`${this.name} says Meow! Meow!`);
    }
}

const cat1 = new Cat("Whiskers", "Gray");
cat1.eat();
cat1.meow();
console.log(cat1);