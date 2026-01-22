//Arthimetic operators
let a = 5;
let b = 2;


console.log("a =", a, "&b =",b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);    //modulus = remainder=1
console.log("a ** b =", a ** b);  //exponentiation = 5^2=25


//unary operator
a++;
a--;
console.log("a = ", a);
console.log("++a =", ++a);
console.log("--a =", --a);


//Asingnment operators
a += 4;
console.log("a = ", a);
a -= 4;
console.log("a = ", a);
a *= 4;
console.log("a = ", a);
a /= 5;
console.log("a = ", a);
a %= 5;
console.log("a =", a);
a **= 4;
console.log("a =", a);



// Comparison Operators
console.log("a == b", a == b);
console.log("a != b", a != b);
let c = "5";
console.log("a === c", a === c);
console.log("a != c", a != c);
console.log("a !== c", a !== c);


//Logical operators
let d = 8;
let e = 6;


console.log("d =",d,"& e =",e);
let cond1 = d > e;
let cond2 = d === 8;
console.log("cond1 && cond2 =", cond1 && cond2);
let cond3 = e > d;
let cond4 = e === 6;
console.log("cond3 || cond4 =", cond3 || cond4);
let cond5 = d > e;
console.log("cond5 =", !cond5);


//ternary operator
let age = 25;

let result = age >= 20 ? "adult" : "not adult";
console.log(result);