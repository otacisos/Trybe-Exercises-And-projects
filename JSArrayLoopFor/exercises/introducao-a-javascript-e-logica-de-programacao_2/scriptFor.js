let numero = 7;
for (let contador = 1; contador <= 10; contador++) {
    console.log(numero * contador);
}

let listaDeNomes = ['Joana', 'Maria', 'Lucas', 'Otacio'];

for (let indice = 1; indice <= listaDeNomes.length; indice ++) {
    console.log('\nVocê é a: ' + indice + 'ª pessoa a chegar!!');
    let eita = 'Parabéns ' + listaDeNomes[indice -1] + '.';
    console.log('#' + eita + '#')

}

if (listaDeNomes.length > 3) {
    //console.log('Hoje não' )
}
