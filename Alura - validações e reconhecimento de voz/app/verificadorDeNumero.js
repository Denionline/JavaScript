


function verificadorDeNumero(chute){
    var numero = parseInt(chute)

    if(Number.isNaN(numero)){
        elementoChute.innerHTML += `<div>Número inválido</div>`
        return
    }

    if(numero > maiorValor || numero < menorValor){
        elementoChute.innerHTML += `<div>Número inválido, ele deve estar entre ${menorValor} e ${maiorValor}!</div>`
        return
    }

    if(numero == numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}.</h3>

        <button id="play-again" class="btn-jogar">Jogar novamente</button>
        `
        return
    }

    if (numeroSecreto > numero){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }else if (numeroSecreto < numero){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }

    document.body.addEventListener('click', event => {
        if(event.target.id == 'play-again'){
            window.location.reload()
        }
    })
}