// Faça um programa que retorne o maior de dois números
// Defina no começo do programa duas variáveis com os valores que serão comparados.

let numA = 1000;
let numB = 200;
let numC = 100;

if (numA > numB && numA > numC) {
  console.log(numA);
} else if (numB > numA && numB > numC) {
  console.log(numB);
} else {
  console.log(numC);
}
