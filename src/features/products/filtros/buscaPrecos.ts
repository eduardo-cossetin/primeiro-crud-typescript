import listaProdutos from "../../../database";


function listaPreco(min: number, max: number) {
  const produtoFiltrado = listaProdutos.filter((produto) =>
    produto.preco >= min && produto.preco <= max
  );

  if (produtoFiltrado.length <= 0) {
    console.log("Produto não encontrado!");
    return;
  }

  produtoFiltrado.forEach((produto) => {
    console.log(`Nome: ${produto.nome} | Preço: ${produto.preco}`);
  })
}

export default listaPreco;