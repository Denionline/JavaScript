
function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livros.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}