// Crie uma função que receba uma string e retorne true se for um palíndromo ,
// ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome("arara") ;
// Retorno esperado: true
// verificaPalindrome("desenvolvimento") ;
// Retorno esperado: false

// function verificaPalindrome(params) {
//   for (let i; i< params.length; i++) {
//       console.log(params[i]);
//   }

// } console.log(verificaPalindrome('1, 2, 3') );

//Duas formas de resolver o exercício
let palavra;
let isPalindrome = true;
let arrayLetras = [];
const result = verificaPalin => (arrayLetras != palavra[(palavra.length - 1) - i])
console.log( result);

// function verificaPalindrome(palavra) {
//   let arrayLetras = palavra.split("");
//   let isPalindrome = true;
//   for (let index in arrayLetras) {
//     if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
//       isPalindrome = false;
//     }
//   }
//   return isPalindrome;
// }

// function verificaPalindrome(string) {
//   let reverse = string.split("").reverse().join("");
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(verificaPalin('arara')); //true
console.log(verificaPalin('desenvolvimento')); //false

