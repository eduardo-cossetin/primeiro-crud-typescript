import listaProdutos from "../../database";
import { ProdutoParcial } from "../../types";

function editarProduto(id: string, produtoAtualizado: ProdutoParcial){
    
    const indiceEditar = listaProdutos.findIndex((produtoProcurado) => produtoProcurado.id === id)

    if(indiceEditar === -1){
        console.log("Produto não encontrado para editar");
        return;
    } 

    const produtoAntigo = listaProdutos[indiceEditar]

    listaProdutos[indiceEditar].nome = produtoAtualizado.nome ?? produtoAntigo.nome,
    listaProdutos[indiceEditar].preco = produtoAtualizado.preco ?? produtoAntigo.preco,
    listaProdutos[indiceEditar].quantidade = produtoAtualizado.quantidade ?? produtoAntigo.quantidade
    
    return listaProdutos    
}


export default editarProduto;