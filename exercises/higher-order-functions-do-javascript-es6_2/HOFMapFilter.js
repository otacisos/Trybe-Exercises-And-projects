const numbers = [19, 21, 30, 3, 45, 22, 15];

const evenNumber = (number) => number % 2 === 0;

const evenNumbers = numbers.filter(evenNumber);

console.log(evenNumbers);

const evenNumbers2 = numbers.filter((number1) => number1 % 2 === 0);

console.log(evenNumbers2);
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const minor = (ages) => {
  return ages.filter((people) => (people.age < 18));
}

console.log(minor(objPeople));