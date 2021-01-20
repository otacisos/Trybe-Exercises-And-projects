let pizzas = ['4 Queijos ', 'Frango ', 'Marquerita ', 'Palmito ', 'Chocolate '];

//pizzas[5] = 'Peru ';
pizzas.push('Sorvete');
console.log(pizzas.length);
console.log(pizzas.sort());
console.log(pizzas[1]);

console.log('Menu: ' + pizzas);

for (let index = 0; index <pizzas.length; index+=1) {
    console.log(pizzas[index]);
    soma=+ index;
}
console.log(soma);