let answer1= confirm('Are you ready to rumble')

console.log (answer1)

if (answer = true){
console.log ("You're ready to rumble!") }
else { 
  console.log ("You have no power here!")

} console.log (answer1)

let first = true;
let second = false;
let third = true;

if (first && third) {
  console.log ('first and third were both true!')
} else if (first || second) {
  console.log ('The first or second was true!')
} else if (third) {
  console.log ('First and second were false, but the third is true')
}
else {
  console.log('Is anything real??')
}

let color = prompt ('What is your favourite colour?')

console.log(color);
console.log(color.toLowerCase())

switch (color.toLowerCase())
{
  case 'purple':
      console.log ('Your favourite colour is purple!')
  break;
      case 'red':
  console.log ('Your favourite colour was red.')
  break;
  case 'blue':
    console.log ('Your favourite colour was blue!')
    break;
    default:
      console.log('I dont know what kind of weird colour you picked')
}