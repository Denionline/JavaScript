let listaDeItens = [];

const form = document.getElementById('form-itens');
const intesInput = document.getElementById('receber-item');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    salvarItens()
})

function salvarItens(){
    const comprasItem = intesInput.value;
    const checarDuplicado = listaDeItens.some((e) => e.valor.toUpperCase() === comprasItem.toUpperCase())

    if(!checarDuplicado){
        listaDeItens.push({
            valor: comprasItem
        })
        intesInput.value = '';
        console.log(listaDeItens)    
    }else{
        alert('Item já existe!')
        intesInput.value = '';
    }

}