function adicionar(){
    var formNum = document.querySelector('#num')
    var numero = Number(formNum.value)
    var item = document.createElement('option')
    var res = document.querySelector('#res')
    item.text = `Valor ${numero} adicionado.`
    tab.appendChild(item)
    var guardar = [numero]
    
    if (guardar.length > 0){
        guardar.push(numero)
    }
}

function verificar(){
    var formNum = document.querySelector('#num')
    var numero = Number(formNum.value)
    var item = document.createElement('option')
    var res = document.querySelector('#res')

    for (i=0;i<=guardar.length;i++){
        res.innerHTML = guardar[i]
    }
}

