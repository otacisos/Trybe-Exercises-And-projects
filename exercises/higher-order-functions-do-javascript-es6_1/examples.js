const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

function verifyNote (student){
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}

// for ( let i = 0; i < students.length; i += 1) {
//   verifyNote(students[i]);
// }

students.forEach(verifyNote);

// console.log(students);
// => [
//     { name: 'Maria', note: 70, approved: 'Aprovado' },
//     { name: 'José', note: 56, approved: 'Recuperação' },
//     { name: 'Roberto', note: 90, approved: 'Aprovado' },
//     { name: 'Ana', note: 81, approved: 'Aprovado' }
//   ]

// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 5 === 0) {
//     firstMultipleOf5 = numbers[i];
//     break;
//   }
// }

// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const testNumbers = numbers.find(number => number % 5  === 0);
// console.log(testNumbers);



// Suas partes:
// arrayOfValues - Nome do array que será percorrido;
// .forEach - A HOF , pode ser, .find , .some , .every ;
// element - Valor do elemento do array;
// (element) => {console.log('Cada elemento do array:', element); 
// - função a ser executada, pode ser passada igual ao terceiro 
// exemplo do conteúdo com a função verifyNote .

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  // console.log('Cada elemento do array:', element);
  // console.log('Index, posição do elemento:', indexOfTheArray);
  // console.log('Array percorrido:', theEntireArray);
});

const emailListInData = [
  "roberta@email.com",
  "paulo@email.com",
  "anaroberta@email.com",
  "fabiano@email.com"
];

const showEmailList = (email) => {
  // console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
}

emailListInData.forEach((element) => {
  showEmailList(element);
  // console.log(`${element}`);
});


// Use o método forEach chamando a callback showEmailList para apresentar os emails.

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

const notes = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyNotes = (studentNotes) => {
  return Object.values(studentNotes).every((note) => note === 'Aprovado');
};

console.log(verifyNotes(notes));