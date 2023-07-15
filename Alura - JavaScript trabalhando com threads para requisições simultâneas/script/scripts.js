import imprimeCotacao from "./imprimeCotacao.js";
const graficoEuro = document.querySelector('#graficoEuro');

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
let workerEuro = new Worker('./script/workers/workerEuro.js')
workerEuro.postMessage('eur')

workerEuro.addEventListener('message', event => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  imprimeCotacao('euro', valor);
  adicionarDados(graficoParaEuro, tempo, valor); 
})