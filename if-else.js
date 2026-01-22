// Conditional Statements

let mode = "pink";
let color;

if (mode === "dark") {
  color = "black";
}
if (mode === "light") {
  color = "white";
}
console.log(color);

//odd or even
let num = 10;

if (num % 2 === 0) {
  console.log(num, "is even");
}
else {
  console.log(num, "is odd");
}

if (mode === "dark") {
  color = "black";
}
else if(mode === "blue") {
  color = "blue";
}
else if (mode ="pink") {
  color = "pink";
}
else {
  color = "white";
}
console.log(color);

//practice question
let number = prompt("Enter a number");

if (number % 5 === 0) {
  console.log(number, "is multiple of 5");
}else {
  console.log(number, "is not multiple of 5");
}

let score = 49;

if (score >= 90 && score <= 100) {
  grade = "A";
}else if (score >= 80 && score < 90){
  grade = "B";
}else if (score >= 70 && score < 80){
  grade = "C";
}else if (score >= 60 && score < 70){
  grade = "D";
}else if (score >= 50 && score < 60){
  grade = "E";
}else {
  grade = "F";
}
console.log("According to your score, Your grade was: ", grade);