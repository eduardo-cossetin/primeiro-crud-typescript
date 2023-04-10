import listaProdutos from "../../database";
import { Produto } from "../../types";

function criarProduto (produto: Produto) {

    const encontrarProduto = listaProdutos.some((item) => item.nome === produto.nome)

    if (encontrarProduto){
        console.log("Produto já está cadastrado no sistema");        
        return; 
    } else {
    listaProdutos.push(produto)
    }
    
}

export default criarProduto;