let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;
let menorValor = 0;

for(let index = 1; index <= numbers.length; index ++ ) {
    if (numbers[index] > maiorValor) {
       maiorValor = numbers[index];
    }

    if (numbers[index] < numbers[maiorValor]) {
        menorValor = index;

    }
}

//console.log(maiorValor);
console.log(menorValor);
