let name = "john";
let surname = "Doe";

console.log(surname);
console.log(name);

let age = 11;
console.log(age);

age = 54;

console.log(age); 

const pi = 3.14;

//pi = 10

console.log(pi);

//There's also var, but it isn't really used anymore

(3+2)-76*(1+1);

console.log("My name's aidan, i just want to run in vs code");

console.log(23+97);

(5)+(5)+(5)+(5)+(5)+(5);

console.log((4+6+9)/77);

let a = 10;

console.log(a);

console.log(a*9);

let b = 7*a;

console.log(b);

let max = 57;

actual = max-13;

percentage = actual/max;

console.log(percentage);

const string = "This is a string"; //string is just the name

console.log(string)

const badString = string; //this is just restoring a variable 

console.log(badString);

console.log(string + "horray");

const newline = "This is a very long \n string that is long";

console.log(newline); //js is case sensitive

let x = 34

let y = "this is a string"

console.log(x+y);

console.log(typeof y);

let length = y.length;

//let char = y.chatAt(0); broken

let letter = y[0];

let part = y.slice(1,5);

let part2 = y.substring(1,5);

let text1 = y.toUpperCase();

let text2 = y.toLowerCase();

//theres a lot more but i can't be asked
//only reapply importatn are repalce and slice

//comparisons

console.log(2>1);
console.log(2==1);
console.log(2!=1);

let result = 5>4;
console.log(result);

if(5>4){
    console.log(true);
}
else{
    console.log(false);
}

if(4>5){
    console.log(true);
}

else if(5>4){
    console.log(true);
}

else{
    console.log(false);
}

console.log(true || true);
console.log(true && false);
console.log(!true);

let g = 2+2;

switch(g){
    case 3:
        console.log("too small");
        break;
    case 4: 
        console.log("right");
        break;
    case 5: 
        console.log("too big");
        break;
    default:
        console.log("i don't know");
}

let aidan = "Aidan";
console.log(aidan + " is the coolest");

let streak = "streak";
console.log("im keeping my" + streak + "alive ");

const push = "push";
console.log("This is a " + push + "onto github");

const alive = "streak alive";
console.log("I'm just doig this to keep my" + alive);
console.log("Don't worry I'm still working");

function favoriteAnimal(animal){
    return animal + " is my favorite animal"
}

console.log(favoriteAnimal('Goat'));

function mathDone(num1, num2){//parameters on this line
    let num3 = num1+num2;
    return num3;
}
//functions are a parts of objects called methods

num4 = mathDone(1,2);//arguments on this line

console.log(num4)

let num = Math.random()
console.log(num);

const myText = "The weather is cold";
console.log(myText);
const newString = myText.replace("cold", "warm");
console.log(newString);


let sayhi = function(){//this is just another way or writing this
    console.log("Hello");
}
sayhi();

function add7(num){
    return num + 7;
}

function mul(num){
    return num *2 ;
}
        
function last(word){
    return word.slice(-1);
}

aidan = last("aidan");
console.log(aidan);

function first(word){
    let f = word.charAt(0);
    let n = f.toUpperCase();
    let d = n + word.slice(1);
    return d;
}

a = first("aidan");
console.log(a);

if (3%3 == 0){//mod show the number of remainders
    console.log("alright");
}

for(let i = 1; i<=5; i++){
    console.log(i);
}
let ai = 5
while(ai>1){
    console.log("Ai is greater than 1")
    ai--;
}

do{
    console.log("hello");
}while(5>6);

for (let i = 0; i<3; i++){
    console.log(i);
}

function repeatString(word, num){
    for(i = 0; i<num; i++)
    {
        console.log(word)
    }
}

repeatString("Aidan", 3)

//function reverse(word){
  //  let nWord;
    //let len = word.length;
    //console.log(len)
    //let last;
    //for (i = 1; 1<=len; i++){
      //  last = word[len-i]
        //console.log(last)
        //nWord = nWord + last
   // }
    //console.log(nWord)
//}
//console.log("new")
//reverse("Aidan")

let ann = [1,2,3,4]
delete ann[2]

function sumAll(num1, num2)
{
    let total=0;
    while(num1<=num2)
    {
        total = total + num1;
        num1 ++;
    }
    console.log(total)
}


sumAll(2,5) //2+3+4+5, 14


