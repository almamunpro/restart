const student = {
    name: "Alice",
    marks: 85,
    grade: "A",
    family: {
        father: "Bob",
        mother: "Carol",
        'member-f': "Eve"
    }
}
// dot notation'
const studentName = student.name;
console.log(studentName);

// bracket notation
const studentMarks = student["marks"];
console.log(studentMarks);  

console.log(student.family.father);
console.log(student.family["member-f"]);


// 2nd
const numbers = [10, 20, 30, 40, 50];

// for(let i=0; i< numbers.length; i++){
//     doubled.push(numbers[i] * 2);
// }
// const doubleNumbers = numbers.map(function(num){
//     return num * 2;
// });

const doubled = numbers.map(num => num * 2);
const doubledEven = numbers.filter(num => num % 2 === 0).map(num => num * 2)
console.log(doubled);

// 3rd