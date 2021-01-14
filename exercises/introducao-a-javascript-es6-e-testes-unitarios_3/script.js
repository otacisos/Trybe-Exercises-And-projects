const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
// assert.strictEqual(50, 70); // AssertionError: 50 == 70
// ex: 1

function division(x, y) {
  return x / y;
}

const expected0 = division(9, 3);

assert.deepStrictEqual(expected0, 3, 'Nove dividido por três é igual a três');
assert.strictEqual(expected0, 3, 'Nove dividido por três é igual a três');

// ex: 2

const sum = (num1, num2) => num1 + num2;

const expected1 = sum(5, 4);
const expected2 = sum(5, 5);

assert.equal(expected1, 9, '5 + 4 = 9'); 
// strictEqual igual
assert.strictEqual(expected1, 9, '5 + 4 = 9'); 
// Não pode ser igual
assert.notStrictEqual(expected2, 9, '5 + 4 = 9'); 
// ex: 3

function add(a, b) {
  return a + b;
}

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==) 
// ex: 4

// ex: 5;
function division(x, y) {
  return x / y;
}

// declaração da função division, definida anteriormente...

assert.strictEqual(division(10, 2), 5); // OK
// assert.strictEqual(division(10, 0), 0); // 💣

