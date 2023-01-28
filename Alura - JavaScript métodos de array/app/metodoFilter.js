const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}

// const btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')
// btnLivrosDisponiveis.addEventListener('click', filtrarLivrosDisponiveis)

// function filtrarLivrosDisponiveis(){
//     let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
//     exibirOsLivrosNaTela(livrosDisponiveis)
// }