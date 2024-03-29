const elementoParaInserirLivros = document.querySelector('#livros')
const valorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros){
    valorTotalDeLivrosDisponiveis.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(evento => {
        // let disponibilidade = verificaDisponibilidade(evento)
        let disponibilidade = evento.quantidade > 0? '' : 'indisponivel'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens ${disponibilidade}" src="${evento.imagem}"
            alt="${evento.alt}" />
            <h2 class="livro__titulo">
            ${evento.titulo}
            </h2>
            <p class="livro__descricao">${evento.autor}</p>
            <p class="livro__preco" id="preco">R$ ${evento.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${evento.categoria}</span>
            </div>
        </div>
        `        
    });
}

// function verificaDisponibilidade(livro){
//     if (livro.quantidade > 0){
//         return disponibilidade = ''
//     }else{
//         return disponibilidade = 'indisponivel'
//     }
// }