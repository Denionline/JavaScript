const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel'){
        const valorTotal = exibirValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDeLivrosDisponivelNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDeLivrosDisponivelNaTela(total){
    valorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
    </div>
    `
}

// const btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')
// btnLivrosDisponiveis.addEventListener('click', filtrarLivrosDisponiveis)

// function filtrarLivrosDisponiveis(){
//     let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
//     exibirOsLivrosNaTela(livrosDisponiveis)
// }