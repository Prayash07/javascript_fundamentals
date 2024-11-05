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

const age = 15;

if (age >= 18) {
  console.log("Yes, You can start Driving! 🚘");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You're too young to drive. Wait for anothoer ${yearsLeft} to start Driving.`
  );
}
