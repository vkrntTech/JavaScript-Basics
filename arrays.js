let marks = [97,50,56,69,71];
console.log(marks);
console.log(marks.length);    //property


let heroes = ["ironman","spiderman","thor","hulk","krish","flyingjaat"];

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

let cities = ["delhi","mumbai","pune","banglore","patna"];

for (let city of cities) {
    console.log(city.toUpperCase());
}


//practice question
let student = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let val of student) {
    sum += val;
}
let avg = sum / student.length;
console.log(`avg marks of the class = ${avg}`);

let items = [250, 645, 300, 900, 50];

let a = 0;

for (let price of items) {
    let offer = price / 10;
    items[a] = items [a] - offer;
    console.log(`value after offer = ${items[a]}`);
    a++;
}

let product = [10, 20, 30, 40, 50];

for(let b = 0; b < product.length; b++){
    let off = product [b] / 5;
    product [b] -= off;
}
console.log(`value after off = ${product}`);


let food = ["potato", "apple", "banana", "litchi"];
console.log(food);
food.push("chips");
console.log(food);


let t = ["a", "b", "c", "d"];
console.log(t);
let deletet = t.pop();
console.log(deletet);


let s = [2,3,4,5,6];
console.log(s.toString());


 let marvel = ["ironman", "spiderman", "thor"];
 let dc = ["batman", "superman"];
 let indian = ["shaktiman", "krishh"];

 let movies = marvel.concat(dc , indian);
 console.log(movies);

marvel.unshift("antman");
console.log(marvel);

let person = ["vikrant", "yash", "saurav", "amol", "dj"];

console.log(person);
console.log(person.slice(0, 3));

let n = [1,2,3,4,5,6,7];

n.splice(3,0,20,30);




//Practice question
let comapanies = ["Bloomberg", "Microsoft", "uber", "Google", "IBM", "Netflix"];

comapanies.shift();

comapanies.splice(2,1,"ola");
comapanies.push("amazon");



