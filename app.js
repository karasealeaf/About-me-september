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

if (user !== 'Liam') {
alert ('urgh, you could have been called Liam, instead you have a silly name like ' = user);
}

alert ('Hello ' + user + '. Would you like to play a game?');

let favFoods = ['pizza', 'pasta', 'garlic bread'];

let foodAns = prompt ('What is one of Tims favourite foods?').toLowerCase();

for (let i = 0; i <  favFoods.length; favFoods++) {
console.log ('checking');
if (foodAns === favFoods [i])
console.log ('found');
{alert ('yeah nice');
userPoints++;
}
}

alert ('You got ' + userPoints = '/1 Questions correct!');


if (foodAns === 'pizza') {
alert ('Yeah nice one, he loves pizza!'); }
