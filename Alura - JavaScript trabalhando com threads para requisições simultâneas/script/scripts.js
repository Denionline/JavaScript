import selecionaCotacao from "./imprimeCotacao.js";

function geraHorario(){
  let data = new Date();
  let horario = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
  return horario
}
function adicionarDados(grafico, legenda, dados){
  grafico.data.labels.push(legenda)
  grafico.data.datasets.forEach(dataSet => {
    dataSet.data.push(dados)
  });
  grafico.update(); 
}

const graficoEuro = document.querySelector('#graficoIene');
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
  
let workerEuro = new Worker('./script/workers/workerEuro.js')
workerEuro.postMessage('eur')

workerEuro.addEventListener('message', event => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  selecionaCotacao('euro', valor);
  adicionarDados(graficoParaEuro, tempo, valor); 
})

const graficoDolar = document.querySelector('#graficoDolar')
const graficoParaDolar = new Chart(graficoDolar, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Dolar',
      data: [],
      borderWidth: 1
    }]
  }
})

let workerDolar = new Worker('./script/workers/workerDolar.js')
workerDolar.postMessage('usd')

workerDolar.addEventListener('message', event => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  selecionaCotacao('dolar', valor)
  adicionarDados(graficoParaDolar, tempo, valor);
})