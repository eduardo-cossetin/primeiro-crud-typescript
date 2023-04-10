import listaProdutos from "../../../database";

function listaId(id: string) {
    const produto = listaProdutos.find((produto) => produto.id === id);
  
    if (!produto) {
      console.log("Produto não encontrado!");
      return;
    }
  
    console.log(produto);
  }
  
  export default listaId;