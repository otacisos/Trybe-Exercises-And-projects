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
  const namePersona = order.name;
  const numberPhone = order.phoneNumber;
  const street = order[address].street;
  const apartment = order[address].apartment;


  console.log(`  "Olá, ${deliveryPerson}, entrega para: ${namePersona}, Telefone: ${numberPhone}, R. ${street}, 
  Nº ${number}, AP: ${apartment}."`);

}
customerInfo(order);

const orderModifier = (order) => {
  const name = order.name = 'Luiz Silva';
  const nameP1 = order['pizza'] = 'muzzarella';
  const nameP2 = order['pizza'] = 'calabresa';
  const drink = order.order.drinks.coke.type;
  const payment = order['payment'] = '50';

  console.log(`\n  Olá, ${name}, o total do seu pedido de ${nameP1}, ${nameP2} e ${drink} é ${payment}.00R$.`);
}
orderModifier(order);


