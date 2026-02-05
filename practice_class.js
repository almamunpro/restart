class animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}
const animal1 = new animal("Leo", "Lion");
console.log(animal1);

class birds extends animal {
    constructor(name,type,color) {
        super();
        this.color = color;
    }
    
    chirp(){
        console.log(`${this.name} says Chirp! Chirp!`);
    }
}
const bird1 = new birds("Tweety", "Yellow");
bird1.eat();
bird1.chirp();
console.log(bird1);

class Fish extends animal{
    constructor(name, type, species) {
        super();
        this.name = name;
        this.species = species;
    }
    
    swim(){
        console.log(`${this.name} is swimming.`);
    }
}
const fish1 = new Fish("Nemo", "Clownfish");
fish1.eat();
fish1.swim();
console.log(fish1);

const fish2 = new Fish("poti","fish", "deshi");
console.log(fish2);

