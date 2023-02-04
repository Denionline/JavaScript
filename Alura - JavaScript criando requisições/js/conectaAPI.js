async function listaVideos () {
    const conexao = await fetch('http://localhost:3000/')
    console.log(conexao)
}

listaVideos()