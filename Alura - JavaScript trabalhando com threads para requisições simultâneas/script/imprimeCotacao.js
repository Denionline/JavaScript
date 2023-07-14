const lista = document.querySelector('[data-lista]');

function imprimeCotacao(nome,valor){
    lista.innerHTML = ''

    for(let multiplicador = 1; multiplicador <= 1000;multiplicador*=10){
        const listaItem = document.createElement('li');
        listaItem.innerHTML = `${multiplicador} ${nome}: ${(multiplicador * valor).toFixed(2)}`;
        lista.appendChild(listaItem);
    }
}