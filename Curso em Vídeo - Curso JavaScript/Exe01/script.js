

function gerar(){
    var res = document.querySelector('#res')
    var num = document.querySelector('#txtnum')
    var numero = Number(num.value)
    var tab = document.querySelector('#tab')
    tab.innerHTML = ''
    for (i=0;i<10;i++){ 
        var item = document.createElement('option')
        item.text = `${numero} X ${i} = ${numero*i}`
        tab.appendChild(item)
    }
}