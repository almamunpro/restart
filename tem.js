const poem = `Roses are red,
Violets are blue,
Sugar is sweet,
And so are you.`;
console.log(poem);



const device = {name: 'phone', price: 500};
const {price}= device;
console.log(price);   

const employee = {id: 101, 
    name: 'Alice', 
    salary: 70000,
    experience: 5
};
const keys = Object.keys(employee);
const values = Object.values(employee);
console.log(keys);
console.log(values);


for(const key of keys){
    console.log(key, employee[key]);
}

employee.department = 'IT';
Object.freeze(employee);
employee.salary = 80000;
console.log(employee.salary);

const entries = Object.entries(employee);
console.log(entries);