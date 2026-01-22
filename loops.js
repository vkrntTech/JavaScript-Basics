//Print 1 to 5
for (let count = 1;count <= 1000; count++){
    console.log("Vikrant Singh");
}

//Calculate sum of 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log("sum =", sum);


let i = 1;
while (i <= 99){
    console.log("Vikrant Singh");
    i++;
}

let a = 1000
do {
    console.log("Vikrant");
    a++;
}while (a <=999);

//for-of-loop
let str = "Vikrant Singh";
let size = 0;

for (let b of str){           //iterator -> Characters
    console.log(b);
    size++;
}
console.log("String Size =", size);


//for-in-loop
let student ={
    name: "Vikrant",
    age: 20,
    cgpa: 7,
    isPass: true,
};
for (let key in student){
    console.log(key,"=", student[key]);
}



//practice question
for (let num = 0; num <= 1000; num++){
    if (num % 2 === 0){
        console.log("num =", num);
    }
}


let gameNumber = 69;
let user = prompt("Guess the game number :");
while (user != gameNumber) {
        user = prompt("you entered wrong number. Guess again :");
}
console.log("Congrats, You guessed the right number");