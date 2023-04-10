import listaProdutos from "../../database";

function deletarProduto (id: string){
    const encontrarIndiceProduto = listaProdutos.findIndex ((item) => item.id === id)

    if(encontrarIndiceProduto === -1){
        console.log("Produto não encontrado");
    }
    
    listaProdutos.splice(encontrarIndiceProduto, 1)
    return listaProdutos
}

export default deletarProduto;