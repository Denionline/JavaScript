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

        atualizaElemento(itemAtual)

        itens[existe.id] = itemAtual
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

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector(`[data-id='${item.id}']`).innerHTML = item.quantidade

}

function botaoDeleta(id){
    const elementoBotao = document.createElement('button')
    elementoBotao.innerText = 'X'

    elementoBotao.addEventListener('click', function(){
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id){
    tag.remove()

    itens.splice(itens.findIndex(element => element.id === id), 1)

    localStorage.setItem('itens', JSON.stringify(itens))
}