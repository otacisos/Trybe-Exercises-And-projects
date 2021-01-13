const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
// console.log(customer);

// Propriedade adicionada manualmente. 
const customer2 = {
  firstName: 'Roberto',
  lastName: 'Faria', 
  age: 22,
  job: 'Teacher',
};
// console.log(customer2);

const customer3 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
// console.log(customer3);

customer3.lastName = 'fFaria';
// console.log(customer3);

// Outro Exemplo
// objeto.nomeDaPropriedade .
// objeto[variavelQueContemONomeDaPropriedade] .
const customer4 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
customer4['lastaName'] = 'Silva';
// console.log(customer4);

const customer5 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer5[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer5.firstName} ${customer.lastName}`;
customer5[newKey] = fullName;
// console.log(customer5);

// How to Use Object.keys in JavaScript

var user = {
  name : 'Jagathish',
  age  : 20,
  getAge() {
    return this.age;
  }
}
// Object.keys(user); //  ["name", "age", "getAge"]
// console.log(Object.keys(user) );
// console.table(user);
  console.log(user);
  
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function funcaoExemplo2(inputValue) {
  return inputValue;
}
const objetoExemplo = {
  funcaoExemplo: inputValue => inputValue,
  funcaoExemplo1: function (inputValue) {
    return inputValue;
  },
  funcaoExemplo2: funcaoExemplo2,
}
console.log(objetoExemplo.funcaoExemplo('funcaoExemplo'));
console.log(objetoExemplo.funcaoExemplo1('funcaoExemplo1'));
console.log(objetoExemplo.funcaoExemplo2('funcaoExemplo2'));