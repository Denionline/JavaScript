async function buscaEndereco (cep) {
    var msgErro = document.getElementById('erro')
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertido = await consultaCEP.json()
        if (consultaCEPConvertido.erro){
            throw Error('CEP não existe!')
        }
        console.log(consultaCEPConvertido)
        var endereco = document.getElementById('endereco')
        var bairro = document.getElementById('bairro')
        var cidade = document.getElementById('cidade')
        var estado = document.getElementById('estado')

        bairro.value = consultaCEPConvertido.bairro
        endereco.value = consultaCEPConvertido.logradouro
        cidade.value = consultaCEPConvertido.cidade
        estado.value = consultaCEPConvertido.uf

    }catch (erro){
        msgErro.innerHTML = 'CEP inválido!'
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))

