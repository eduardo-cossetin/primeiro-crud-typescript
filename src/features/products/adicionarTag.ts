import listaProdutos from "../../database";
import { Tag } from "../../types";

function adicionarTag(id: string, tagNova: Tag) {
  const produto = listaProdutos.find((produto) => produto.id === id);

  if (!produto) {
    console.log("Produto não encontrado.");
    return;
  }

  if (produto.categoria.tag.includes(tagNova)) {
    console.log("Essa TAG já existe!");
    return;
  }

  console.log(produto.categoria.tag = tagNova);
      
}

export default adicionarTag;