
let qtdVendaTotal = 1;
let valorCompra = 4;
let valorProdutosVendidos = 8 ;
let valorCusto = valorCompra * qtdVendaTotal;
let valorVenda = valorProdutosVendidos * qtdVendaTotal;
let impostoSobreOCusto = 0.2 * qtdVendaTotal;

if (qtdVendaTotal <= 0 || valorCompra < 0 || valorProdutosVendidos < 0) {
  console.log('Erro!!, Ow, escreve o que pedi nos campos, vlw.')

} else {
  let valorCustoTotal = valorCusto + impostoSobreOCusto;
  let lucro = valorVenda - valorCustoTotal;
  console.log(`Lucro de : ${lucro}`);

}
