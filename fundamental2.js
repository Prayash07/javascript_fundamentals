"use strict";

let hasDriversLicense = false;
const passedTest = true;

if (passedTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("You are now permitted to drive!");

function fruitProcessor(apples, oranges) {
  const juice = `The juice is made of ${apples} number of apples and ${oranges} number of oranges. `;
  return juice;
}
const juice = fruitProcessor(5, 2);
console.log(juice);

// function declaration

function calculateAge(birthYear) {
  return 2024 - birthYear;
}
const prayashAge = calculateAge(1998);
console.log(prayashAge);

// function expression

const calculateAgeWithAnoFunction = function (birthYear) {
  return 2024 - birthYear;
};
const sushmitakoAge = calculateAgeWithAnoFunction(1999);
console.log(sushmitakoAge);

// arrow function

const yourAge = (birthyear) => 2024 - birthyear;
const johnAge = yourAge(1995);
console.log(johnAge);

const yearsUntilRetirement = (personName, birthyear) => {
  const ageOfPerson = 2024 - birthyear;
  const yearsLeft = 65 - ageOfPerson;
  return `${personName} has ${yearsLeft} years left for his/her retirement.`;
};

const inputYear = yearsUntilRetirement("John Doe", 1990);
console.log(inputYear);

// function inside function

const cutFruit = (fruit) => fruit * 4;

function fruitProcessingFunction(apple, orange) {
  const applePieces = cutFruit(apple);
  const orangePieces = cutFruit(orange);
  return `There are ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

const fruitPieces = fruitProcessingFunction(2, 3);
console.log(fruitPieces);
