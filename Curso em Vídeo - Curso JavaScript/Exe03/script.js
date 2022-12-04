


function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var formAno = document.getElementById('txtano')
    var resultado = document.querySelector('#res')
    var formSexo = document.getElementsByName('txtsex')

    if (formAno.value <= 0 || formAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    }else {
        var idade = ano - Number(formAno.value)
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        resultado.innerHTML = `Sua idade é ${idade} anos`
        resultado.style.textAlign = 'Center'
        /*
        Bebe acima de 1 ano.
        Jovem acima de 10 anos.
        Adulto acima de 30 anos.
        Idoso acima de 60 anos.
        */

        if (idade > 10 && idade < 30){
            if (formSexo[0].checked){
                resultado.innerHTML = `Detectamos um Jovem de ${idade} anos.`
                imagem.setAttribute('src', 'img/foto-jovem-m.png')
                resultado.appendChild(imagem)
            }else {
                resultado.innerHTML = `Detectamos uma Jovem de ${idade} anos.`
                imagem.setAttribute('src', 'img/foto-jovem-f.png')
                resultado.appendChild(imagem)
            }
        }else if (idade > 30 && idade < 60){
            if (formSexo[0].checked){
                resultado.innerHTML = `Detectamos um homem adulto de ${idade} anos.`
                imagem.setAttribute('src', 'img/foto-adulto-m.png')
                resultado.appendChild(imagem)
            }else {
                resultado.innerHTML = `Detectamos uma mulher adulta de ${idade} anos.`
                imagem.setAttribute('src', 'img/foto-adulto-f.png')
                resultado.appendChild(imagem)
            }
        }else if(idade > 60){
            if (formSexo[0].checked){
                resultado.innerHTML = `Detectamos um homem idoso de ${idade} anos.`
                imagem.setAttribute('src', 'img/foto-idoso-m.png')
                resultado.appendChild(imagem)
            }else {
                resultado.innerHTML = `Detectamos uma mulher idosa de ${idade} anos.`
                imagem.setAttribute('src', 'img/foto-idoso-f.png')
                resultado.appendChild(imagem)
            }
        }else{
            if (formSexo[0].checked){
                resultado.innerHTML = `Detectamos uma criança de ${idade} anos.`
                imagem.setAttribute('src', 'img/foto-bebe-m.png')
                resultado.appendChild(imagem)
            }else {
                resultado.innerHTML = `Detectamos uma criança de ${idade} anos.`
                imagem.setAttribute('src', 'img/foto-bebe-f.png')
                resultado.appendChild(imagem)
            }
        }
    }
}