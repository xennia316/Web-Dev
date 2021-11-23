// console.log("Hello Tambe!");


// let mami = "Nicole";
// let age = 32;
// console.log(mami);
// console.log(age);
// //This is how we comment.
// let name = { firstname: "Salome", secondname: "Tambe" }
//     //usingdescriptive arrays.

// let age = 20;

// if (age > 21) {
//     console.log("You be mami oh!!!");
// } else if (age < 15) {
//     console.log("You be pikin ooo!!!");
// } else if (age == 20) {
//     console.log("You be neutral ooo!!!");
// }

// let value1 = "Jongo hub";
// let value2 = "Jongo hub";
// if (value1 == value2) {
//     console.log("they're equal ooo!!!");
// } else {
//     console.log("unequal :(");
// } //conditional statements.
let age = 25;
let any = "Age is ";
let combi = any + age;

console.log(combi);
console.log(age);
// console.log(age++);
// console.log(++age);
// if (age == "25") {
//     console.log("They're equal.");
// }

console.log(age == "25"); //compares only the value
console.log(age === "25"); //compares value and type.
age == "25" ? console.log(true) : console.log(false);

let name1 = "Sallyyyy"
let name2 = "Sonnnia"
if (name1 == "Sallyyy" && name2 == "Sonnnia") {
    console.log("This is the same person");
} //all two conditions must be true with and operator. With the or operator just onecondition can be true.
console.log(age += 5);
if (!name1) {
    console.log("This is the wrong Thelma");
} //checks if name1 is defined or exists.
//using the arrrow function.
const loveMessage = (name) => {
    console.log("I love you" + name);

}
loveMessage(" Zendaya");
// could be wriiten as function loveMessage(name)

const twoNumbers = (number1, number2) => {
    console.log(number1 + number2);
}
twoNumbers(5, 6);
twoNumbers(-5, -6);
let time = "am";
switch (time) {
    case "am":
        console.log("Hello. Good evening");
        break;
    case "pm":
        console.log("Helllo. Good morning");
        break;
    default:
        console.log("Time is invalid");

}

for (let a = 0; a < 10; a++) {
    console.log("I'm Okay! :)");
}
//looping expressions

let names = ["shekina", "Thelma", "Favor"]
names[4] = "Shiffra"

console.log(names[4]);
// arrays in js
console.log(names.length);
//to get the length of thne array. Or rather number of elements.
let person1 = { complexion: "Fair", height: 1.63, name: "Thelma" }
let person2 = {
    complexion: "Molato",
    height: 1.71,
    name: "Sally"
}




person1.complexion = "Dark";
// to change a prpoperty.

console.log(person1);
//display properties.