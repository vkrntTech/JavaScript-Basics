//strings
let str = "Vikrant";
console.log(str[5]);

//Template Literals
let specialString = `This is a template literal`;
console.log(specialString);


let obj = {
    item: "Bat",
     price: 2000,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;    //String interpolation
console.log(output);

console.log("Vikrant \n Rajput");


let vik = "Vikrant Singh";
let newStr = vik.toUpperCase();
console.log(vik);
console.log(newStr);

let r = "Vikrant Singh";
let newR = r.toLowerCase();
console.log(r);
console.log(newR);


//Practice question
let username = prompt("Enter your full name without spaces");
let p = "@" + username + username.length;
console.log(p);