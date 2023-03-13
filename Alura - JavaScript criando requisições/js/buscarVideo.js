import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDaPesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideo(dadosDaPesquisa);
    
    const lista = document.querySelector('[data-lista]');

    while (lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.descricao, element.url, element.imagem))
    );
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]')
botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))
document.querySelector('[data-pesquisa]').addEventListener('keypress', evento => {
    if (evento.key === 'Enter') {
        buscarVideo(evento)
    }
});