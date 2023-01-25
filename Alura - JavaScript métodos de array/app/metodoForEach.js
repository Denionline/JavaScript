const elementoParaInserirLivros = document.querySelector('#livros')

function exibirOsLivrosNaTela(listaDeLivros){
    listaDeLivros.forEach(evento => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${evento.imagem}"
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