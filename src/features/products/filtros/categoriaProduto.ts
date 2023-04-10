import listaProdutos from "../../../database";


function produtosCategoria(nomeCategoria: string) {
  const produtosFiltrados = listaProdutos.filter((produto) =>
    produto.categoria.nome === nomeCategoria
  );

  if (produtosFiltrados.length <= 0) {
    console.log("Produto não encontrado");
      return;
  }

  produtosFiltrados.forEach((produto) => {
    console.log(`Nome: ${produto.nome} | Estoque: ${produto.quantidade}`);
  })
}

export default produtosCategoria;
