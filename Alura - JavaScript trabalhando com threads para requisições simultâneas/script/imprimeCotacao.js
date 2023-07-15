const lista = document.querySelector('[data-lista]');

function imprimeCotacao(nome,valor){
    lista.innerHTML = ''

    for(let multiplicador = 1; multiplicador <= 5000;multiplicador*=10){
        const listaItem = document.createElement('li');
        listaItem.innerHTML = `${multiplicador} ${nome}: ${(multiplicador * valor).toFixed(2)}`;
        lista.appendChild(listaItem);
    }
}

export default imprimeCotacao;