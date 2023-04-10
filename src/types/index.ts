interface Produto {
    id: string,
    nome: string,
    preco: number,
    categoria: Categoria,
    quantidade: number,
    genero: Genero
}

type ProdutoParcial = Omit<Partial<Produto>,'id'| 'categoria' | 'genero' >;

type ProdutoParcialTodos = Omit<Partial<Produto>, 'categoria' | 'genero' >;

type Tag = 'BLACKFRIDAY' | 'NOVOS' | 'USADOS' ;

type Genero = 'ELETRONICOS' | 'ELETRODOMESTICOS' | 'GAMER' ;

interface Categoria {
    nome: string,
    tag: Tag
}

export { Produto, Tag, Genero, Categoria, ProdutoParcial, ProdutoParcialTodos }