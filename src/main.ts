import listaProdutos from "./database";
import {  criarProduto, deletarProduto ,editarProduto , mostrarProdutos, produtosCategoria, listaId, listaPreco, buscaTag} from "./features/products";
import adicionarTag from "./features/products/adicionarTag";
import { Categoria, Produto } from "./types";


const mouse: Produto = {
    id: "1",
    nome: "mouse",
    preco: 190.90,
    categoria: { nome: 'perifericos', tag: 'NOVOS'},
    quantidade: 2,
    genero: 'GAMER'
}

const teclado: Produto = {
    id: "2",
    nome: "teclado",
    preco: 298.09,
    categoria: { nome: 'perifericos', tag: 'USADOS'},
    quantidade: 25,
    genero: 'ELETRONICOS'
}

//Criar Produto
criarProduto(mouse)
criarProduto(teclado)

// //Deletar produto
// deletarProduto("2");
// console.log(listaProdutos)

//Editar produto
// editarProduto("2", {
//     nome: "Caixa de som Bluetooh",
//     quantidade: 2789.23
// })
// console.log(listaProdutos)

//Buscar pelo ID
// listaId("2");

// Mostrar todos os produtos
// mostrarProdutos();

// // Busca pela TAG
// buscaTag("USADOS");

// // Busca pela Categoria
// produtosCategoria("perifericos");

// // Busca pelo preço
// listaPreco(150, 200);

// Adicionar TAG
// adicionarTag('1', 'BLACKFRIDAY'); 
// console.log(listaProdutos)







