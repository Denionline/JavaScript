const segundosParaAtualizacao = 5;//segundos

addEventListener('message', () => {
    conectaAPI();
    setInterval(() => {
        conectaAPI()
    }, segundosParaAtualizacao * 1000);
})

async function conectaAPI(){
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.USDBRL)
}