const elementoChute = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start()

//recognition.addEventListener('result', onSpeak)

recognition.addEventListener('result', (event) => {
    onSpeak(event.results[0][0].transcript)
})

function onSpeak(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
            <span class="box">${chute}</span>
    `
    verificadorDeNumero(chute)
}

recognition.addEventListener('end', () => recognition.start())