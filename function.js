function my(){
    console.log("hello");
    console.log("vikrant");
}
my(); 
my();

function a(msg , n){    //parameter -> input
    console.log(msg, n);

}
a("JavaScript", 100);   //argument


//Function -> 2numbers, sum

function sum(x , y){     //local variables -> scope
    s = x + y;     
    return s;
}
let val = sum(100, 69);
console.log(val);

//multiplication function
const mul = (a, b) => {
    console.log(a * b);
}
mul(2, 2);


//Practice question
function vowels(str){
    let count = 0;
    for (const char of str) {
        if(char === "a" || char ==="e" || char === "i" || char === "o" || char === "u" ){
            count++;
        }
    }
    return count;
}
vowels( "vikrant Singh");

const vow = (y) => {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char ==="e" || char === "i" || char === "o" || char === "u" ){
            count++;
        }
    }
    return count;
}