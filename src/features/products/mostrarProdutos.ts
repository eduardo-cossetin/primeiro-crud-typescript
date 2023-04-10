import listaProdutos from "../../database";

function mostrarProdutos() {
  if (listaProdutos.length <= 0) {
    console.log("Não existem produtos cadastrados no sistema!");
    return;
  }

  listaProdutos.forEach((produto) => {
    console.log(`ID: ${produto.id} | Nome: ${produto.nome} | Preço: ${produto.preco} | Estoque: ${produto.quantidade}`);
  })
}

export default mostrarProdutos;