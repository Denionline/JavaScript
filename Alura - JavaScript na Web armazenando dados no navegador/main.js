const form = document.querySelector('#novoItem')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    criarElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criarElemento(nome, quantidade){
    
}