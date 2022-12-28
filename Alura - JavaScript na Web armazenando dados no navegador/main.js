const form = document.querySelector('#novoItem')
const lista = document.querySelector('#lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []


itens.forEach( (element) => {
    criarElemento(element)
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    const existe = itens.find(element => element.nome === nome.value)

    if (existe){
        itemAtual.id = existe.id
    }else{
        itemAtual.id = itens.length

        criarElemento(itemAtual)

        itens.push(itemAtual)
    }


    localStorage.setItem('itens', JSON.stringify(itens))

    evento.target.elements['nome'].value = ""
    evento.target.elements['quantidade'].value = ""
})

function criarElemento(item){
    
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
 
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)
}