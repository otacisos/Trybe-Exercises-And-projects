let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroImpar = 0;

//Descubra quantos valores ímpares existem no array e imprima o resultado.
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

for(let index = 1; index <= numbers.length; index ++ ) {
    if (numbers[index] % 2 !== 0 ) {
        numeroImpar += 1;
    }

    else if (numeroImpar < 1) {
        //console.log('nenhum valor ímpar encontrado');
    }

}

console.log(numeroImpar);
