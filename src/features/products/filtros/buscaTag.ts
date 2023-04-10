import listaProdutos from "../../../database";
import { Tag } from "../../../types";

function buscaTag(tag: Tag) {
  const produtofiltrado = listaProdutos.filter((produto) =>
  produto.categoria.tag.includes(tag)
  );

  if (produtofiltrado.length <= 0) {
    console.log("Produto não encontrado");
    return;
  }

let stockSum = 0;
  produtofiltrado.forEach((produto) => {
    console.log(`Nome: ${produto.nome} | Estoque: ${produto.quantidade}`);
    stockSum += produto.quantidade;
  });

  console.log(`Estoque total é de: ${stockSum}`);
}

export default buscaTag;