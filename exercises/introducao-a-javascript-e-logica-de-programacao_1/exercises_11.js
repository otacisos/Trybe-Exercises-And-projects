let aliquotaIR = 0;
let salario = 5050;

if (salario <= 1556.94) {
  aliquotaINSS = salario * 0.08 ;
} else if (salario >= 1556.95 && salario <= 2594.94) {
  aliquotaINSS = salario * 0.09 ;
} else if (salario >= 2594.93 && salario <= 5189.82) {
  aliquotaINSS = salario * 0.11 ;
} else if ( salario > 5189.92) {
  aliquotaINSS = 570;
} else {
  console.log('Valor muito baixo!!');
}
  let salarioBrutoINSS = salario - aliquotaINSS;

if (salarioBrutoINSS > 0 && salarioBrutoINSS <= 1903.98) {
    console.log('Isento!!');

  } else if (salarioBrutoINSS >= 1903.99 && salarioBrutoINSS <= 2826.65){
    aliquotaIR = 0.075 * salarioBrutoINSS - 142.8;

  } else if (salarioBrutoINSS >= 2826.66 && salarioBrutoINSS <= 3751.05) {
    aliquotaIR = 0.15 * salarioBrutoINSS - 354,8;
  } else if (salarioBrutoINSS >= 3751,06 && salarioBrutoINSS <= 4664.68) {
    aliquotaIR = 0.225 * salarioBrutoINSS - 636.13;
  } else {
    aliquotaIR = 0.275 * salarioBrutoINSS - 869.36;
  } 
  let salarioL = salarioBrutoINSS - aliquotaIR;
  
  console.log(salarioL);

// Resultado: R$ 2.612,55.
