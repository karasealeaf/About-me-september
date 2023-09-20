let color = prompt("What is a primary colour!?");

console.log(color);
console.log(color.toLowerCase());

switch (color.toLowerCase()) {
  case "yellow":
    console.log("Your right, the colour yellow is a primary colour!");
    break;
  case "red":
    console.log("Your right, the colour red is a primary colour!");
    break;
  case "blue":
    console.log("Your right, the colour blue is a primary colour!");
    break;
  default:
    console.log("Errr, that colour is definately NOT a primary one!");
}

let username = prompt("What is your name?");
console.log("The users name is " + username);

let userlocation = prompt("Where are you from?");
console.log("You are from " + userlocation);

let colour = prompt("What is your favourite colour?");
console.log("Your favourite colour is " + colour);

let feel = prompt("How are you?");
console.log("You are " + feel);

let pet = prompt("Do you have any pets?");
console.log("You have a " + pet);

alert(
  "Hello there " +
    username +
    ", you are from " +
    userlocation +
    ". Wow, " +
    colour +
    " is THE best colour!! " +
    "OMG, I can't believe you feel " +
    feel +
    "!" + " Amazing, you have a " + pet + "!"
);

console.log("This is just to check if the script is working.");






let userPoints = 0;

alert ('Welcome to my quiz!');

let user = prompt ('What is your name?');

//Making sure they didn’t press cancel ort leave the box empty.

if (!user) {
user = prompt ('You need to tell me your name!');
}

alert ('Hello ' + user + '. Welcome to my quiz, would you like to play?');

let favFoods = ['pizza', 'pasta', 'garlic bread'];

let foodAns = prompt ('What is one of my favourite foods?').toLowerCase();

for (let i = 0; i <  favFoods.length; favFoods++) {
console.log ('checking');
if (foodAns === favFoods [i])
console.log ('found');
alert ('Noice');
userPoints++;
}
