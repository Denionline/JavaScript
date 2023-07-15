import imprimeCotacao from "./imprimeCotacao.js";

const graficoEuro = document.querySelector('#graficoEuro');
const segundosParaAtualizacao = 10;//segundos

const graficoParaEuro = new Chart(graficoEuro, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Euro',
        data: [],
        borderWidth: 1
      }]
    },
  });
  
setInterval(() => conectaAPI(), segundosParaAtualizacao * 1000);  
async function conectaAPI(){
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/EUR-BRL")
    const conectaTraduzido = await conecta.json();
    let tempo = geraHorario();
    let valor = conectaTraduzido.EURBRL.ask;
    adicionarDados(graficoParaEuro, tempo, valor)
    imprimeCotacao("Euro",valor)
}

function geraHorario(){
  let data = new Date();
  let horario = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
  console.log(horario)
  return horario
}

function adicionarDados(grafico, legenda, dados){
  grafico.data.labels.push(legenda)
  grafico.data.datasets.forEach(dataSet => {
    dataSet.data.push(dados)
  });
  grafico.update(); 
}