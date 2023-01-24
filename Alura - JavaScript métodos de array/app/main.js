var livros =[]
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()

const elementoParaInserirLivros = document.querySelector('#livros')

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.log(livros)
    exibirOsLivrosNaTela(livros)
}

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
            <p class="livro__preco" id="preco">R$ ${evento.preco}</p>
            <div class="tags">
                <span class="tag">${evento.categoria}</span>
            </div>
        </div>
        `        
    });
}