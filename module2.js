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
// const numbers = [10, 20, 30, 40, 50];

// for(let i=0; i< numbers.length; i++){
//     doubled.push(numbers[i] * 2);
// }
// const doubleNumbers = numbers.map(function(num){
//     return num * 2;
// });

// const doubled = numbers.map(num => num * 2);
// const doubledEven = numbers.filter(num => num % 2 === 0).map(num => num * 2)
// console.log(doubled);

// const friends = ["John", "Jane", "Jim", "Jill"];
// const namelengths = friends.map(friend => friend.length);
// console.log(namelengths);

// const numbers = [1, 2, 3, 4, 5];
// numbers,forEach(num => console.log(num));

// 3rd
// const numbers2 = [1, 2, 3, 4, 5];
// let sum = 0;
// for(const num of numbers2){
//     sum += num;
// }
// console.log(sum);

// const total = numbers2.reduce((acc, num) => acc + num, 0);
// console.log(total);


//4th
// const players = [
//     {name: "Player1", score: 50},
//     {name: "Player2", score: 70},
//     {name: "Player3", score: 40},
// ];
// const topPlayer = players.reduce((top, player) => {
//     return (player.score > top.score) ? player : top;
// }, players[0]);
// console.log(topPlayer);

// // 5th
// class player {}
// const player1 = new player();
// console.log(player1);

class Player {
     goal() {
        console.log("Goal scored!")
    }
    getTeamName() {
        return "The Crown Kings";
    }
}

const player1 = new Player();
player1.goal();
console.log(player1);