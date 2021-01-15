
let movem = 'TOWER';
let toLowerCase = movem.toLowerCase();

switch (toLowerCase) {
  case 'bishop':
  console.log('diagonals');
  break;

  case 'tower':
    console.log('front');
  break;

  case 'horse':
    console.log('one-two');

  default:
    console.log('Digita direito!!');
    break;
}
