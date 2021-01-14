const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const address = 'address';
  const number = order[address].number;
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const constumerPersona = ['name'];
  const namePersona = order.name;
  const numberPhone = order.phoneNumber;
  const street = order[address].street;
  const apartment = order[address].apartment;


  console.log(`"Olá, ${deliveryPerson}, entrega para: ${namePersona}, Telefone: ${numberPhone}, R. ${street}, 
  Nº ${number}, AP: ${apartment}."`);

}
customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, 
// o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
const orderModifier = (order) => {
  

}
orderModifier(order);


