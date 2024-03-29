import { conectaAPI } from "./conectaAPI.js"

const formulario = document.querySelector('[data-formulario]')

async function criarVideo (evento){
    evento.preventDefault()

    const imagem = document.querySelector([data-imagem])
    const url = document.querySelector([data-url])
    const titulo = document.querySelector([data-titulo])
    const descricao = Math.floor(Math.random * 10).toString()

    try {
        await conectaAPI.criaVideo(titulo, descricao, url, imagem)

        window.location.href = "./pages/envio-concluido.html"
    }catch (e) {
        alert(e)
    }
}

formulario.addEventListener('submit', evento => criarVideo(evento))