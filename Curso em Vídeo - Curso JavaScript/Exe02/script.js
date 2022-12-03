
function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    if (hora < 12){
        var periodo = 'manhã'
        img.src = 'img/manha.png'
        document.body.style.background = '#c9d6de'
    }else if (hora < 19){
        periodo = 'tarde'
        img.src = 'img/tarde.png'
        document.body.style.background = '#fda975'
    } else {
        periodo = 'noite'
        img.src = 'img/noite.png'
        document.body.style.background = '#656567'
    }

    msg.innerHTML = `Agora são ${hora}:${minutos} da ${periodo}!`

}

