class Vehicle {
    
    #tintColor = "Black";
    constructor(type, brand, price) {
        this.type = type;
        this.brand = brand
        this.price = price
    }
    getThis() {
        console.log(this);
    }
    getPrice() {
        console.log(`The price of the ${this.brand} ${this.type} is ${this.price} Taka.`);
    }
}
const car1 = new Vehicle("Car", 'Toyota', 3000000);
car1.getThis();
car1.getPrice();