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
            <img class="livro__imagens indisponivel" src="imagens/O-Retorno-do-cangaceiro-JavaScript.png"
            alt="Capa do livro O Retorno do Cangaceiro JavaScript+" />
            <h2 class="livro__titulo">
                Cangaceiro JavaScript +:
                O Retorno do cangaceiro JavaScript
            </h2>
            <p class="livro__descricao">${evento.autor}</p>
            <p class="livro__preco" id="preco">${evento.preco}</p>
            <div class="tags">
                <span class="tag">${evento.categoria}</span>
            </div>
        </div>
        `        
    });
}