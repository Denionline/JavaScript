


function verificar(){
    var inicio = document.querySelector('#inicio')
    var nInicio = Number(inicio.value)
    var fim = document.querySelector('#fim')
    var nFim = Number(fim.value)
    var passo = document.querySelector('#passo')
    var nPasso = Number(passo.value)
    var res = document.querySelector('#res')

    if (nPasso == 0 ){
        alert('Passo inválido! Considerando o PASSO 1')
        nPasso = 1
        var calc = nInicio
        res.innerHTML = ''

        while (calc <= nFim){
            res.innerHTML += `${calc}👉`
            calc = calc + nPasso
        }
        res.innerHTML += '🏁'
    }else {
        var calc = nInicio
        res.innerHTML = ''

        while (calc <= nFim){
            res.innerHTML += `${calc}👉`
            calc = calc + nPasso
        }
        res.innerHTML += '🏁'
    }
}