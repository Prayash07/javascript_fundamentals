let firstName = "Prayash";
console.log(firstName);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

const now = 2024;
const agePrayash = now - 1996;
const ageSushmita = now - 1998;
console.log(agePrayash, ageSushmita);

console.log(agePrayash > ageSushmita);

const name = "Prayash Koirala";
const job = "Software Developer";
const birthYear = 1996;

const prayash = `I'm ${name} I'm a ${job} I was born in ${birthYear}`;
console.log(prayash);

const age = 18;

if (age === 18) {
  console.log("Yes, You can start Driving! 🚘");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You're too young to drive. Wait for anothoer ${yearsLeft} to start Driving.`
  );
}

const hasDrivingLicense = true;
const hasGoodVision = false;

if (hasDrivingLicense && hasGoodVision) {
  console.log("Yor are able to drive!");
} else {
  console.log("You are unable to drive!");
}

const day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Yeah it's Monday!");
    break;

  default:
    console.log("No, It's not Monday!");
    break;
}

const myAge = 21;

myAge >= 18
  ? console.log("You are allowed to drink beer!")
  : console.log("You are not allowed to drink beer!");
